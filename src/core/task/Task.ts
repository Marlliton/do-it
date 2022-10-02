import Entity, { EntityProps } from "../shared/Entity";

export interface TaskProps extends EntityProps {
  title?: string;
  description?: string;
  isCompleted?: boolean;
}

export default class Task extends Entity<Task, TaskProps> {
  constructor(props: TaskProps) {
    super(props);
  }

  get id() {
    return this._props.id;
  }
  get title() {
    return this._props.title;
  }
  get description() {
    return this._props.description;
  }
  get isCompleted() {
    return this._props.isCompleted;
  }

  static newTask(props: TaskProps) {
    return new Task({ ...props, isCompleted: false });
  }

  changePending() {
    return this.clone({isCompleted: false})
  }

  changeCompleted() {
    return this.clone({isCompleted: true})
  }

  protected validations(): void {
    if (!this.id) {
      throw new Error("Id é obrigatório");
    }

    if (!this.description) {
      throw new Error("Descrição é obrigatória");
    }

    if (!this.title) {
      throw new Error("Titulo é obrigatório");
    }
  }
}
