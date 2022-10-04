import { createContext } from "react";
import Task from "../core/task/Task";
import { useAuth } from "../hooks/useAuth";
import { services } from "../service";

interface TaskContextProps {
  consult(userEmail?: string): Promise<Task[]>;
  save(task: Task, userEmail?: string): Promise<void>;
  update(taskId: string, attributes: any, userEmail?: string): Promise<void>;
  destroy(taskId: string, userEmail?: string): Promise<void>;
}

interface TaskProviderProps {
  children: any;
}

const TaskContext = createContext({} as TaskContextProps);

export function TaskProvider({ children }: TaskProviderProps) {
  const { user } = useAuth();

  async function consult(userEmail?: string): Promise<Task[]> {
    if (!userEmail) return [];
    const result = await services.tasks.consultTasks(userEmail);
    return result;
  }

  async function save(task: Task, userEmail?: string): Promise<void> {
    if (!task || !userEmail) return;
    return await services.tasks.saveTask(task, userEmail);
  }

  async function update(
    taskId: string,
    attributes: any,
    userEmail?: string
  ): Promise<void> {
    if (!taskId || !attributes || !userEmail) return;
    await services.tasks.updateTask(taskId, attributes, userEmail);
  }

  async function destroy(taskId: string, userEmail?: string): Promise<void> {
    if (!taskId || !userEmail) return;
    return await services.tasks.destroyTask(taskId, userEmail);
  }

  return (
    <TaskContext.Provider
      value={{
        consult: () => {
          return consult(user?.email!);
        },
        save: (task: Task) => {
          return save(task, user?.email!);
        },
        update: (taskId: string, attributes: any) => {
          return update(taskId, attributes, user?.email!);
        },
        destroy: (taskId: string) => {
          return destroy(taskId, user?.email!);
        },
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext };
