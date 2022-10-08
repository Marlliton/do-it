import { MyImage } from "../basicComponents/Image";
import mediumLogo from "public/images/medium_logo.svg";
import { Heart } from "phosphor-react";
import { Filter } from "../Filter";
import { Avatar } from "../Avatar";

interface UserInformationProps {
  imageUrl?: string;
  username: string;
  total?: number;
}

export function UserInformation(props: UserInformationProps) {
  return (
    <div
      className={`
      hidden  md:flex flex-col justify-between 
    `}
    >
      <div className="flex flex-col">
        <div className="p-5">
          <Avatar
            alt="Imagem de perfil"
            imageUrl={props.imageUrl}
            className="h-28 w-28 "
          />
          <h1 className="font-bold pt-5 text-2xl">Olá, {props.username}!</h1>
        </div>

        <Filter startOpen />

        <div className="border-t-2 mt-6 p-5 border-black-task-area ">
          <h2 className="font-semibold text-xl">
            Total de tarefas:{" "}
            <span className="font-extralight">{props.total ?? 0}</span>
          </h2>
        </div>
      </div>
      <div
        className={`
        p-8 lg:p-10 flex gap-4 items-center
      `}
      >
        <MyImage
          src={mediumLogo}
          alt="Logo Da aplicação"
          classNames={`
          h-[35px] md:w-[35px] lg:h-[50px] lg:w-[50px]
        `}
        />
        <span>
          <h2 className="font-bold">Do It!</h2>
          <div className="flex items-center gap-2">
            <p>seu to do app favorito</p>
            <Heart color="#EE69AC" size={20} />
          </div>
        </span>
      </div>
    </div>
  );
}
