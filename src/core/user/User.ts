
export interface UserProps {
  uid: string;
  name: string;
  email: string;
  imgUrl?: string
}

export default class User {
  private _props: UserProps
  constructor(props: UserProps) {
    this._props = props
  }

  get name() { return this._props.name}
  get email() { return this._props.email}
  get imgUrl() { return this._props.imgUrl}
}