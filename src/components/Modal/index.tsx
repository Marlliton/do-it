import { XCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import Task from "../../core/task/Task";
import { Button } from "../basicComponents/Button";
import { Input } from "../basicComponents/Input";

interface ModalProps {
  closeModal(): void;
  onSubmit(e: React.FormEvent, inputData: any, task?: Task): void;
  task: Task | null;
}

export function Modal(props: ModalProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    setTitle(props.task?.title! ?? "");
    setDescription(props.task?.description! ?? ""); //     >=
  }, [props.task]);

  return (
    <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xl z-10 flex items-center justify-center text-white">
      <div className="rounded-lg bg-black-task-area w-full max-w-xl relative pt-9">
        <Button
          onClick={props.closeModal}
          clickDownEffect
          className="absolute right-4 top-4 text-gray/80 rounded-full hover:bg-task-title/10 p-1 hover:text-task-title "
        >
          <XCircle size={30} />
        </Button>
        <form
          onSubmit={e => {
            props.onSubmit(e, { title, description });
            setDescription("");
            setTitle("");
            props.closeModal();
          }}
          className="bg-black-task-area p-5 rounded-lg flex flex-col gap-6 z-50"
        >
          <h1 className="text-center font-bold text-xl">
            Adicionar uma nova tarefa
          </h1>
          <Input
            type="text"
            id="title"
            label="Titulo"
            onChange={titile => setTitle(titile)}
            value={title}
            required
          />
          <Input
            type="text"
            id="title"
            label="Tarefa"
            onChange={description => setDescription(description)}
            value={description}
            required
          />

          <div className="flex gap-3">
            <Button
              onClick={props.closeModal}
              clickDownEffect
              brightnessOnHover
              className="bg-gray w-full rounded-lg"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              clickDownEffect
              brightnessOnHover
              className="bg-my-gradient w-full py-3 rounded-lg text-black-task-area font-semibold"
            >
              Adicionar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
