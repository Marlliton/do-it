import { TypeFilter } from "../shared/TypeFilter";
import Task from "./Task";

interface ListTasksProps {
  tasks: Task[];
  filter: TypeFilter;
}

export default class ListTasks {
  private _props: ListTasksProps;
  constructor(props: ListTasksProps) {
    this._props = props;
  }

  get tasks() {
    return this.applyFilter(this._props.tasks);
  }

  get filter() { return this._props.filter }

  applyFilter(tasks: Task[]): Task[] {
    if (this.filter === TypeFilter.COMPLETED) {
      return this.filterByCompleted(tasks);
    } else if (this.filter === TypeFilter.PENDING) {
      return this.filterByPending(tasks);
    }

    return [...tasks];
  }

  private filterByCompleted(tasks: Task[]): Task[] {
    return tasks.filter(task => task.isCompleted === true);
  }

  private filterByPending(tasks: Task[]): Task[] {
    return tasks.filter(task => task.isCompleted === false);
  }
}
