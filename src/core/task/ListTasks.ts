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
    return this._applyFilter(this._props.tasks);
  }

  get filter() {
    return this._props.filter;
  }

  add(newTask: Task): ListTasks {
    const allTasks = [...this.tasks, newTask];
    return new ListTasks({ tasks: allTasks, filter: this.filter });
  }

  remove(taskId: string): ListTasks {
    const allTasks = this.tasks.filter(task => task.id !== taskId);
    return new ListTasks({ tasks: allTasks, filter: this.filter });
  }

  modifyTask(modifiedTask: Task): ListTasks {
    const allTasks = this.tasks.map(task => {
      return task.id === modifiedTask.id ? modifiedTask : task;
    });

    return new ListTasks({ tasks: allTasks, filter: this.filter });
  }

  private _applyFilter(tasks: Task[]): Task[] {
    if (this.filter === TypeFilter.COMPLETED) {
      return this._filterByCompleted(tasks);
    } else if (this.filter === TypeFilter.PENDING) {
      return this._filterByPending(tasks);
    }

    return [...tasks];
  }

  noFilter(): ListTasks {
    return new ListTasks({ tasks: this._props.tasks, filter: TypeFilter.NONE });
  }

  filterByPending(): ListTasks {
    return new ListTasks({ tasks: this._props.tasks, filter: TypeFilter.PENDING });
  }

  filterByCompleted(): ListTasks {
    return new ListTasks({ tasks: this._props.tasks, filter: TypeFilter.COMPLETED });
  }

  private _filterByCompleted(tasks: Task[]): Task[] {
    return tasks.filter(task => task.isCompleted === true);
  }

  private _filterByPending(tasks: Task[]): Task[] {
    return tasks.filter(task => task.isCompleted === false);
  }
}
