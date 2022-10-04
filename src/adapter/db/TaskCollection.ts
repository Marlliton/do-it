import { DataProvider } from "../../core/data";
import Task, { TaskProps } from "../../core/task/Task";
import { TaskRepository } from "../../core/task/TaskRepository";

export default class TaskCollection implements TaskRepository {
  private _provider: DataProvider;

  constructor (provider: DataProvider) {
    this._provider = provider;
  } 

  async consultTasks(userEmail: string): Promise<Task[]> {
    const result = await this._provider.consult(this.config(userEmail).path);
    return result?.map((doc: TaskProps) => new Task({...doc}));
  }
  
  async saveTask(task: Task | TaskProps, userEmail: string): Promise<void> {
    return await this._provider.save(this.config(userEmail).path, task);
  }
  
  async updateTask(taskId: string, attributes: any, userEmail: string): Promise<void> {
    return await this._provider.update(this.config(userEmail).path, taskId, attributes)
  }

  async destroyTask(taskId: string, userEmail: string): Promise<void> {
    return await this._provider.delete(this.config(userEmail).path, taskId)
  }

  config(email: string) {
    return {
      path: `tasks/${email}/all-tasks`
    }
  }
} 