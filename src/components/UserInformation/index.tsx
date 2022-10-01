import { MyImage } from "../basicComponents/Image";
import defaultUserImage from "public/images/profile.svg";
import mediumLogo from "public/images/medium_logo.svg";
import {Heart} from "phosphor-react"

interface UserInformationProps {
  imageUrl?: string;
  username: string;
}

export function UserInformation(props: UserInformationProps) {
  return (
    <div
      className={`
      hidden  md:flex flex-col justify-between 
    `}
    >
      <div className="p-5">
        <MyImage
          src={props.imageUrl ?? defaultUserImage}
          alt="Imagem de perfil"
          classNames="h-28 w-28 rounded-full overflow-hidden"
          size={100}
        />
        <h1 className="font-bold pt-5 text-2xl">Olá, {props.username}!</h1>
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
