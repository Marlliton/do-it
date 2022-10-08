import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onIdTokenChanged,
} from "firebase/auth";
import { app } from "../../../config/config";
import {
  AuthProvider,
  CancelObserver,
  UserObserver,
} from "../../../core/auth/AuthPorvider";
import User, { UserProps } from "../../../core/user/User";

export default class FirebaseAuth implements AuthProvider {
  private _auth: Auth;
  constructor() {
    this._auth = getAuth(app);
  }

  async loginWithGoogle(): Promise<User> {
    const response = await signInWithPopup(
      this._auth,
      new GoogleAuthProvider()
    );

    const user: UserProps = {
      uid: response.user.uid,
      name: response.user.displayName!,
      email: response.user.email!,
      imgUrl: response.user.photoURL!,
    };

    return this._normalizedUser(user);
  }

  async logout(): Promise<void> {
    return signOut(this._auth);
  }

  observeUserChanged(observer: UserObserver): CancelObserver {
    return onIdTokenChanged(this._auth, async user => {
      const userUpdated: UserProps = {
        uid: user?.uid!,
        name: user?.displayName!,
        email: user?.email!,
        imgUrl: user?.photoURL!,
      };

      observer(this._normalizedUser(userUpdated));
    });
  }

  private _normalizedUser(user: UserProps): User {
    return new User({ ...user });
  }
}
