import { createContext, useState } from "react";
import Id from "../core/shared/Id";
import ListTasks from "../core/task/ListTasks";
import Task from "../core/task/Task";
import { useAuth } from "../hooks/useAuth";
import { services } from "../service";

interface TaskContextProps {
  consultTasks(userEmail?: string): Promise<Task[]>;
  saveTask(task: Task): Promise<void>;
  updateTask(task: Task, attributes: any): Promise<void>;
  destroyTask(taskId: string, userEmail?: string): Promise<void>;
  setListTasks(listTasks: ListTasks): void;
  listTasks?: ListTasks;
}

interface TaskProviderProps {
  children: any;
}

const TaskContext = createContext({} as TaskContextProps);

export function TaskProvider({ children }: TaskProviderProps) {
  const [listTasks, setListTasks] = useState<ListTasks>();

  const { user } = useAuth();

  async function consultTasks(): Promise<Task[]> {
    const result = await services.tasks.consultTasks(user?.email!);
    return result;
  }

  async function saveTask(newTask: Task) {
    const task = Task.newTask({
      ...newTask,
      id: Id.new(),
    });
    const newList = listTasks?.add(task);

    setListTasks(newList);
    return await services.tasks.saveTask(task, user?.email!);
  }

  async function updateTask(task: Task, attributes: any): Promise<void> {
    if (!task || !attributes) return;

    const updatedTask = task.clone({ ...attributes });
    const newList = listTasks?.modifyTask(updatedTask);

    setListTasks(newList);
    await services.tasks.updateTask(task.id!, attributes, user?.email!);
  }

  async function destroyTask(
    taskId: string,
    userEmail?: string
  ): Promise<void> {
    if (!taskId || !userEmail) return;
    const newList = listTasks?.remove(taskId);

    setListTasks(newList);
    return await services.tasks.destroyTask(taskId, userEmail);
  }

  return (
    <TaskContext.Provider
      value={{
        listTasks,
        setListTasks,
        consultTasks,
        saveTask,
        updateTask,
        destroyTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext };
