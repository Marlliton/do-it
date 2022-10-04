import Id from "./Id";

export interface EntityProps {
  id?: string;
}

export default abstract class Entity<T, TProps extends EntityProps> {
  protected _props: TProps;
  constructor(props: TProps) {
    this._props = props;
    this.validations()
  }

  clone(newProps: TProps): T {
    return new (this.constructor as any)({
      ...this._props,
      ...newProps,
    });
  }

  protected abstract validations(): void;
}
