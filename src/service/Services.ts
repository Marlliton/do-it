import TaskCollection from "./adapter/collections/TaskCollection";
import { AuthProvider } from "../core/auth/AuthPorvider";
import AuthService from "../core/auth/AuthSevice";
import { DataProvider } from "../core/data";
import ServiceTask from "../core/task/ServiceTask";

interface ServicesProps {
  auth: AuthProvider;
  database: DataProvider;
}

export default class Services {
  private _props: ServicesProps;

  constructor(props: ServicesProps) {
    this._props = props;
  }

  get auth(): AuthService {
    return new AuthService(this._props.auth);
  }

  get tasks(): ServiceTask {
    return new ServiceTask(new TaskCollection(this._props.database));
  }
}
