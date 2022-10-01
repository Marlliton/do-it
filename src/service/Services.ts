import { AuthProvider } from "../core/auth/AuthPorvider";

export default class Services {
  private _auth: AuthProvider;

  constructor(auth: AuthProvider) {
    this._auth = auth;
  }

  get auth() { return this._auth }
}
