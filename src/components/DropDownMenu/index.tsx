import arrowLeft from "public/images/back.svg";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Avatar } from "../Avatar";
import { Button } from "../basicComponents/Button";
import { MyImage } from "../basicComponents/Image";

export function DropDownMenu() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const { user, logout } = useAuth();

  return (
    <div className="relative">
      <Button
        className={`${
          showDropDown && "outline-none ring ring-task-title"
        } rounded-full`}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <Avatar
          className="w-8 h-8"
          alt="Imagem de perfil"
          imageUrl={user?.imgUrl}
        />
      </Button>
      {showDropDown && (
        <div className="absolute flex flex-col top-11 -left-28 min-w-min z-10 bg-gray rounded-md p-3 ">
          <div className="whitespace-nowrap">{user?.name}</div>
          <span className="block h-[2px] w-full bg-global-bg-and-task-bg/30"></span>

          <Button
            clickDownEffect
            onClick={() => {
              logout();
              setShowDropDown(false);
            }}
            className="pt-1 gap-2 self-start"
          >
            <MyImage
              src={arrowLeft}
              alt="Logo da aplicação"
              classNames="w-[18px]"
            />
            <p>Sair</p>
          </Button>
        </div>
      )}
    </div>
  );
}
