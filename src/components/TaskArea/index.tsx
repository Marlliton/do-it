import { Plus } from "phosphor-react";
import { Button } from "../basicComponents/Button";
import { Task } from "../Task";

export function TaskArea() {
  return (
    <div className="flex flex-col bg-black-task-area rounded-sm h-full relative">
      <header className="flex justify-between px-10 pt-7">
        <h1 className="font-bold text-2xl">Minhas Tarefas</h1>
        <div>
          <Button
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
        p-8 flex flex-col justify-start items-center gap-4 absolute top-[100px] right-0 overflow-y-scroll max-h-[calc(100%-80px)]
      `}
      >
        <Task title="Titulo Da tarefa" content="Lorem ipsum dolor sit amet" />
        <Task
          completed
          title="Titulo Da tarefa"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae pariatur velit cumque eveniet labore error ipsa accusamus perferendis doloremque dolore ea ipsam, at quam, id iure, perspiciatis libero iste!"
        />
        <Task
          title="Titulo Da tarefa"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae pariatur velit cumque eveniet labore error ipsa accusamus perferendis doloremque dolore ea ipsam, at quam, id iure, perspiciatis libero iste!"
        />
        <Task
          title="Titulo Da tarefa"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae pariatur velit cumque eveniet labore error ipsa accusamus perferendis doloremque dolore ea ipsam, at quam, id iure, perspiciatis libero iste!"
        />
        <Task
          title="Titulo Da tarefa"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae pariatur velit cumque eveniet labore error ipsa accusamus perferendis doloremque dolore ea ipsam, at quam, id iure, perspiciatis libero iste!"
        />
        <Task
          title="Titulo Da tarefa"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae pariatur velit cumque eveniet labore error ipsa accusamus perferendis doloremque dolore ea ipsam, at quam, id iure, perspiciatis libero iste!"
        />
        <Task
          title="Titulo Da tarefa"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae pariatur velit cumque eveniet labore error ipsa accusamus perferendis doloremque dolore ea ipsam, at quam, id iure, perspiciatis libero iste!"
        />
        <Task
          title="Titulo Da tarefa"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae pariatur velit cumque eveniet labore error ipsa accusamus perferendis doloremque dolore ea ipsam, at quam, id iure, perspiciatis libero iste!"
        />
        <Task
          title="Titulo Da tarefa"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae pariatur velit cumque eveniet labore error ipsa accusamus perferendis doloremque dolore ea ipsam, at quam, id iure, perspiciatis libero iste!"
        />
        <Task
          title="Titulo Da tarefa"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae pariatur velit cumque eveniet labore error ipsa accusamus perferendis doloremque dolore ea ipsam, at quam, id iure, perspiciatis libero iste!"
        />
      </div>
    </div>
  );
}
