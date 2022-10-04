import Task, { TaskProps } from "./Task";
import { TaskRepository } from "./TaskRepository";

export default class ServiceTask {
  private _repo: TaskRepository;
  constructor(repo: TaskRepository) {
    this._repo = repo;
  }

  async consult(userEmail: string): Promise<Task[]> {
    const result = await this._repo.consult(userEmail);
    // console.log("🚀 ~ file: ServiceTask.ts ~ line 12 ~ ServiceTask ~ consult ~ result", result)
    return result;
  }
  async save(task: Task | TaskProps, userEmail: string): Promise<void> {
    return await this._repo.save(task, userEmail);
  }
  async update(taskId: string, attributes: any, userEmail: string): Promise<void> {
    return await this._repo.update(taskId, attributes, userEmail);
  }
  async delete(taskId: string, userEmail: string): Promise<void> {
    return await this._repo.delete(taskId, userEmail);
  }
}
