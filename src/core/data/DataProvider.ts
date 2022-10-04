export interface DataProvider {
  save(path: string, data: any, id?: string): Promise<void>;
  update(path: string, id: string, attributes: any): Promise<void>;
  delete(path: string, id: string): Promise<void>;
  consult(path: string): Promise<any>;
}
