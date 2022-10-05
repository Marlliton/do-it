import Id from "../../src/core/shared/Id";
import { TypeFilter } from "../../src/core/shared/TypeFilter";
import ListTasks from "../../src/core/task/ListTasks";
import Task from "../../src/core/task/Task";

const task1 = Task.newTask({
  id: Id.new(),
  title: "Tarefas de casa",
  description: "Lavar roupas",
});
const task2 = Task.newTask({
  id: Id.new(),
  title: "Tarefas de casa",
  description: "Lavar os pratos",
});
const task3 = Task.newTask({
  id: Id.new(),
  title: "Tarefas de casa",
  description: "Passear com os cachorros",
});
const task4 = new Task({
  id: Id.new(),
  title: "Tarefas de casa",
  description: "Estudar javascript",
  isCompleted: true,
});

describe("Deve testar a lista de tarefas", () => {
  test("Deve trazer todas as tarefas", () => {
    const listTasks = new ListTasks({
      tasks: [task1, task2, task3, task4],
      filter: TypeFilter.COMPLETED,
    });

    const allTasks = listTasks.noFilter();

    expect(allTasks.tasks.length).toBe(4);
  });

  test("Deve filtrar por pendentes", () => {
    const listTasks = new ListTasks({
      tasks: [task1, task2, task3, task4],
      filter: TypeFilter.NONE,
    });

    const pendingTasks = listTasks.filterByPending();
    
    expect(pendingTasks.tasks.length).toBe(3);
    pendingTasks.tasks.forEach(t => expect(t.isCompleted).toBe(false));
  });

  test("Deve filtrar por completadas", () => {
    const listTasks = new ListTasks({
      tasks: [task1, task2, task3, task4],
      filter: TypeFilter.COMPLETED,
    });
    
    let completedTasks = listTasks.filterByCompleted();
    completedTasks = listTasks.noFilter();
    completedTasks = listTasks.filterByPending();
    completedTasks = listTasks.noFilter();
    completedTasks = listTasks.filterByCompleted();
    expect(completedTasks.tasks.length).toBe(1);
  });

  test("Deve os atributos de uma tarefa", () => {
    const id = Id.new();
    const modifyTask = Task.newTask({
      id,
      title: "Tarefa para ser modificada",
      description: "Estudar javascript",
    });
    const listTasks = new ListTasks({
      tasks: [task1, task2, task3, task4, modifyTask],
      filter: TypeFilter.NONE,
    });

    const newList = listTasks.modifyTask(
      modifyTask.clone({
        description: "Já estudei essa bagaça hoje",
        isCompleted: true,
      })
    );
    const changedTask = newList.tasks.find(task => task.id === modifyTask.id);
    expect(changedTask).toHaveProperty(
      "description",
      "Já estudei essa bagaça hoje"
    );
    expect(changedTask).toHaveProperty("isCompleted", true);
  });

  test("Deve Adicionar uma tarefa a lista", () => {
    const id = Id.new();
    const task = Task.newTask({
      id,
      title: "Tarefa para adicionar",
      description: "Tarefa adicionada",
    });
    const listTasks = new ListTasks({
      tasks: [task1, task2, task3, task4],
      filter: TypeFilter.NONE,
    });

    const newListTasks = listTasks.add(task);
    const addedTask = newListTasks.tasks.find(t => t.id === task.id);
    expect(addedTask?.id).toBe(task.id);
    expect(newListTasks.tasks.length).toBe(5);
  });

  test("Deve remover uma tarefa", () => {
    const id = Id.new();
    const task = Task.newTask({
      id,
      title: "Tarefa para adicionar",
      description: "Tarefa adicionada",
    });

    const listTasks = new ListTasks({
      tasks: [task1, task2, task3, task4, task],
      filter: TypeFilter.NONE,
    });

    const newListTasks = listTasks.remove(task.id!);
    const removedTask = newListTasks.tasks.find(t => t.id === task.id);
    expect(removedTask).toBe(undefined);
  });
});
