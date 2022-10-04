import { Plus } from "phosphor-react";
import ListTasks from "../../core/task/ListTasks";
import Task, { TaskProps } from "../../core/task/Task";
import { Button } from "../basicComponents/Button";
import { TaskComponent } from "../Task";

interface TaskAreaProps {
  listTasks?: ListTasks;
  onChangeModal?(): void;
  onModifyTask?(task: Task, attributes: TaskProps): void;
  onDelete?(taskId: string): void;
  editTask?(task: Task | null): void;
}

export function TaskArea(props: TaskAreaProps) {
  function renderTasks() {
    return props.listTasks?.tasks?.map(task => {
      return (
        <TaskComponent
          key={task.id}
          id={task.id!}
          title={task.title!}
          content={task.description!}
          completed={task.isCompleted}
          onToggleStatus={() => {
            props?.onModifyTask?.(task, {isCompleted: !task.isCompleted})
          }}
          onDelete={() => {
            props?.onDelete?.(task.id!)
          }}
          onEdite={() => {
            props?.onChangeModal?.();
            props?.editTask?.(task)
          }}
        />
      );
    });
  }

  return (
    <div className="flex flex-col bg-black-task-area rounded-sm h-full relative">
      <header className="flex justify-between px-10 pt-7">
        <h1 className="font-bold text-2xl">Minhas Tarefas</h1>
        <div>
          <Button
            onClick={props.onChangeModal}
            brightnessOnHover
            scale
            clickDownEffect
            className={`bg-my-gradient h-10 w-10 rounded-full`}
          >
            <Plus weight="bold" size={25} />
          </Button>
        </div>
      </header>
      <div
        className={`
        p-8 flex flex-col justify-start items-center gap-4 absolute top-[100px] right-0 overflow-y-scroll max-h-[calc(100%-80px)] w-full
      `}
      >
        {renderTasks()}
      </div>
    </div>
  );
}
