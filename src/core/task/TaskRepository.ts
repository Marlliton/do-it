import Task, { TaskProps } from "./Task";

export interface TaskRepository {
  consult(userEmail: string): Promise<Task[]>;
  save(task: Task | TaskProps, userEmail: string): Promise<void>;
  update(taskId: string, attributes: any, userEmail: string): Promise<void>;
  delete(taskId: string, userEmail: string): Promise<void>;
}
