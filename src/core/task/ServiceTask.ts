import Task, { TaskProps } from "./Task";
import { TaskRepository } from "./TaskRepository";

export default class ServiceTask {
  private _repo: TaskRepository;
  constructor(repo: TaskRepository) {
    this._repo = repo;
  }

  async consultTasks(userEmail: string): Promise<Task[]> {
    const result = await this._repo.consultTasks(userEmail);
    // console.log("🚀 ~ file: ServiceTask.ts ~ line 12 ~ ServiceTask ~ consult ~ result", result)
    return result;
  }
  async saveTask(task: Task | TaskProps, userEmail: string): Promise<void> {
    return await this._repo.saveTask(task, userEmail);
  }
  async updateTask(taskId: string, attributes: any, userEmail: string): Promise<void> {
    return await this._repo.updateTask(taskId, attributes, userEmail);
  }
  async destroyTask(taskId: string, userEmail: string): Promise<void> {
    return await this._repo.destroyTask(taskId, userEmail);
  }
}
