import { TypeFilter } from "../../src/core/shared/TypeFilter";
import ListTasks from "../../src/core/task/ListTasks";
import Task from "../../src/core/task/Task";

const task1 = Task.newTask({
  id: 1,
  title: "Tarefas de casa",
  description: "Lavar roupas",
});
const task2 = Task.newTask({
  id: 2,
  title: "Tarefas de casa",
  description: "Lavar os pratos",
});
const task3 = Task.newTask({
  id: 3,
  title: "Tarefas de casa",
  description: "Passear com os cachorros",
});
const task4 = new Task({
  id: 4,
  title: "Tarefas de casa",
  description: "Estudar javascript",
  isCompleted: true,
});

describe("Deve testar a lista de tarefas", () => {
  test("Deve trazer todas as tarefas", () => {
    const listTasks = new ListTasks({tasks: [task1, task2, task3, task4], filter: TypeFilter.NONE,});

    expect(listTasks.tasks.length).toBe(4);
  });

  test("Deve filtrar por pendentes", () => {
    const listTasks = new ListTasks({tasks: [task1, task2, task3, task4], filter: TypeFilter.PENDING,});

    expect(listTasks.tasks.length).toBe(3);
  });
  test("Deve filtrar por pendentes", () => {
    const listTasks = new ListTasks({tasks: [task1, task2, task3, task4], filter: TypeFilter.COMPLETED,});

    expect(listTasks.tasks.length).toBe(1);
  });
});
