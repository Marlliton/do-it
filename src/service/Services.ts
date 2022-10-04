import TaskCollection from "../adapter/db/TaskCollection";
import { AuthProvider } from "../core/auth/AuthPorvider";
import AuthService from "../core/auth/AuthSevice";
import { DataProvider } from "../core/data";
import DatabaseService from "../core/data/DatabaseService";
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
    return new ServiceTask(
      new TaskCollection(this._props.database)
    )
  }
}
