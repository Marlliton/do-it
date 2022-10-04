import { DataProvider } from "./DataProvider";

export default class DatabaseService implements DataProvider {
  private _provider: DataProvider;
  constructor(provider: DataProvider) {
    this._provider = provider;
  }

  async save(path: string, data: any, id?: string | undefined): Promise<void> {
    return await this._provider.save(path, data, id);
  }

  async update(path: string, attributes: any, id?: string | undefined): Promise<void> {
    return await this._provider.update(path, attributes, id);
  }

  async delete(path: string, id: string): Promise<void> {
    return await this._provider.delete(path, id);
  }

  async consult(path: string): Promise<any> {
    return await this._provider.consult(path);
  }

}