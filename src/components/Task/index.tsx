import { CheckSquare, PencilSimpleLine, Square, Trash } from "phosphor-react";
import { Button } from "../basicComponents/Button";

interface TaskProps {
  title: string;
  content: string;
  completed?: boolean;
  onClick?(): void;
}

export function Task(props: TaskProps) {
  return (
    <div
      className={`
      flex justify-between items-center px-4 bg-global-bg-and-task-bg 
      w-full min-h-min rounded-lg p-1
    `}
    >
      <div>
        <h1 className="font-bold text-xl pb-1 text-task-title">
          {props.title}
        </h1>
        <p className="pb-2">{props.content}</p>
      </div>
      <div className="flex gap-2 ml-2">
        <Button scale className="hover:text-task-title">
          <Trash size={24} />
        </Button>
        <Button scale className="hover:text-task-title">
          <PencilSimpleLine size={24} />
        </Button>
        <Button scale className="hover:text-task-title">
          {!props.completed ? (
            <Square size={24} />
          ) : (
            <CheckSquare size={24} weight="fill" className="text-task-title" />
          )}
        </Button>
      </div>
    </div>
  );
}
