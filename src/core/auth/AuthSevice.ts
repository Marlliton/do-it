import User from "../user/User";
import { AuthProvider, CancelObserver, UserObserver } from "./AuthPorvider";

export default class AuthService {
  private _provider: AuthProvider;

  constructor(provider: AuthProvider) {
    this._provider = provider;
  }

  async loginWithGoogle(): Promise<User> {
    return await this._provider.loginWithGoogle();
  }

  async logout() {
    return await this._provider.logout();
  }

  observeUserChanged(observer: UserObserver): CancelObserver {
    return this._provider.observeUserChanged(observer);
  }
}
