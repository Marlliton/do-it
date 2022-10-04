import { DataProvider } from "../../core/data";
import Task, { TaskProps } from "../../core/task/Task";
import { TaskRepository } from "../../core/task/TaskRepository";

export default class TaskCollection implements TaskRepository {
  private _provider: DataProvider;

  constructor (provider: DataProvider) {
    this._provider = provider;
  } 
  async consult(userEmail: string): Promise<Task[]> {
    const result = await this._provider.consult(this.config(userEmail).path);
    // console.log("🚀 ~ file: TaskCollection.ts ~ line 13 ~ TaskCollection ~ consult ~ result", result)
    return result?.map((doc: TaskProps) => new Task({...doc}));
  }
  async save(task: Task | TaskProps, userEmail: string): Promise<void> {
    return await this._provider.save(this.config(userEmail).path, task);
  }
  
  async update(taskId: string, attributes: any, userEmail: string): Promise<void> {
    return await this._provider.update(this.config(userEmail).path, taskId, attributes)
  }

  async delete(taskId: string, userEmail: string): Promise<void> {
    return await this._provider.delete(this.config(userEmail).path, taskId)
  }

  config(email: string) {
    return {
      path: `tasks/${email}/all-tasks`
    }
  }
} 