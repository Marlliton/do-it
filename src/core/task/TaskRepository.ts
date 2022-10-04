import Task, { TaskProps } from "./Task";

export interface TaskRepository {
  consultTasks(userEmail: string): Promise<Task[]>;
  saveTask(task: Task | TaskProps, userEmail: string): Promise<void>;
  updateTask(taskId: string, attributes: any, userEmail: string): Promise<void>;
  destroyTask(taskId: string, userEmail: string): Promise<void>;
}
