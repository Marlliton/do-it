import Id from "../../src/core/shared/Id";
import Task from "../../src/core/task/Task";

describe("Deve testar as tarefas", () => {
  test("Deve criar uma tarefa", () => {
    const id = Id.new()
    const task = new Task({
      title: "Cerveja",
      description: "Devo Comprar cerveja para tomar mais tarde",
      id,
      isCompleted: false,
    });

    expect(task).toHaveProperty("title", "Cerveja");
    expect(task).toHaveProperty(
      "description",
      "Devo Comprar cerveja para tomar mais tarde"
    );
    expect(task.id).toBe(id);
    expect(task.isCompleted).toBe(false);
  });

  test("Deve gerar erros se tivermos um objeto inválido", () => {
    try {
      const task = new Task({});
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe("Id é obrigatório");
      // expect((error as Error).message).toBe("Descrição é obrigatória");
      // expect((error as Error).message).toBe("Titulo é obrigatório");
    }
  });

  test("Deve criar uma tarefa pendente", () => {
    const id = Id.new()
    const task = Task.newTask({
      title: "Mudar minhas...",
      description: "Devo melhorar como pessoa",
      id,
      isCompleted: false,
    });

    expect(task.isCompleted).toBe(false);
  });

  test("Deve alterar o status para completada", () => {
    const id = Id.new()
    const task = Task.newTask({
      title: "Tarefa Pendente",
      description: "Devo completar essa tarefa",
      id,
    });

    const completedTask = task.changeCompleted();
    expect(completedTask.isCompleted).toBe(true);
  });

  test("Deve alterar o status para pendente", () => {
    const id = Id.new()
    const task = new Task({
      title: "Tarefa Completada",
      description: "Devo tornar essa tarefa pendente",
      id,
      isCompleted: true
    });

    const pendingTask = task.changePending();
    expect(pendingTask.isCompleted).toBe(false);
  });
});
