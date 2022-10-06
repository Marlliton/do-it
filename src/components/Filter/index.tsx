import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useState } from "react";
import { TypeFilter } from "../../core/shared/TypeFilter";
import { useTask } from "../../hooks/useTask";
import { Button } from "../basicComponents/Button";

export function Filter() {
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const { listTasks, setListTasks } = useTask();

  return (
    <div className="flex justify-end items-center px-3">
      <div>
        <Button
          onClick={() => setOpenFilters(!openFilters)}
          className={`
          mr-1 text-white/50 rounded-full hover:bg-task-title/10 hover:text-task-title p-1 flex flex-1 
        `}
        >
          {openFilters ? (
            <ArrowCircleRight size={30} weight="bold" />
          ) : (
            <ArrowCircleLeft size={30} weight="bold" />
          )}
        </Button>
      </div>
      <div
        className={`w-full flex h-[46px] overflow-hidden ${
          openFilters
            ? "animate-enter-filter-animation"
            : "animate-leave-filter-animation"
        }  bg-global-bg-and-task-bg rounded-xl items-center justify-center`}
      >
        <Button
          className={`h-full flex flex-1 hover:bg-my-gradient hover:text-black ${
            listTasks?.filter === TypeFilter.COMPLETED &&
            "bg-my-gradient text-black brightness-90"
          }`}
          onClick={() => {
            const completedTasks = listTasks?.filterByCompleted();
            setListTasks(completedTasks!);
          }}
        >
          Concluídas
        </Button>
        <Button
          className={`h-full flex flex-1 hover:bg-my-gradient hover:text-black ${
            listTasks?.filter === TypeFilter.NONE &&
            "bg-my-gradient text-black brightness-90"
          }`}
          onClick={() => {
            const allTasks = listTasks?.noFilter();
            setListTasks(allTasks!);
          }}
        >
          Todas
        </Button>
        <Button
          className={`h-full flex flex-1 hover:bg-my-gradient hover:text-black ${
            listTasks?.filter === TypeFilter.PENDING &&
            "bg-my-gradient text-black brightness-90"
          }`}
          onClick={() => {
            const pendingTasks = listTasks?.filterByPending();
            setListTasks(pendingTasks!);
          }}
        >
          Pendentes
        </Button>
      </div>
    </div>
  );
}
