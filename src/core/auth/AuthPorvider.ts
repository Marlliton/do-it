import User from "../user/User";

export type UserObserver = (user: User) => void
export type CancelObserver = () => void

export interface AuthProvider {
  loginWithGoogle(): Promise<User>
  logout(): Promise<void>
  observeUserChanged(observer: UserObserver): CancelObserver 
}