import { ArrowCircleRight } from "phosphor-react";
import { useState } from "react";
import { TypeFilter } from "../../core/shared/TypeFilter";
import { useTask } from "../../hooks/useTask";
import { Button } from "../basicComponents/Button";

interface FilterProps {
  startOpen?: boolean;
  className?: string;
  mobile?: boolean;
}

export function Filter(props: FilterProps) {
  const [openFilters, setOpenFilters] = useState<boolean>(
    props.startOpen ?? false
  );
  const { listTasks, setListTasks } = useTask();

  return (
    <div className="flex flex-1 flex-row-reverse md:flex-row justify-end items-center md:px-3">
      <div>
        <Button
          onClick={() => setOpenFilters(!openFilters)}
          className={`
          mr-1 text-white/50 rounded-full hover:bg-task-title/10 hover:text-task-title p-1 flex flex-1 
        `}
        >
          <ArrowCircleRight
            className={`transition-all ${openFilters && props?.mobile && "rotate-180"} ${!openFilters && !props?.mobile && "rotate-180"}`}
            size={props?.mobile ? 28 : 35}
            weight="bold"
          />
        </Button>
      </div>
      <div
        className={`h-10 w-full text-xs flex items-center justify-center overflow-hidden md:h-[46px] md:text-base ${
          openFilters
            ? "animate-enter-filter-animation"
            : "animate-leave-filter-animation"
        }  bg-global-bg-and-task-bg rounded-xl`}
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
