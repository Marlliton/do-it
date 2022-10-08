import { MyImage } from "../Image";
import logo from "public/images/small_logo_mobile.svg";
import arrowLeft from "public/images/back.svg";
import { Button } from "../Button";
import { useAuth } from "../../../hooks/useAuth";
import { DropDownMenu } from "../../DropDownMenu";
import { Filter } from "../../Filter";

interface HeaderProps {
  children?: any;
}

export function Header({ children }: HeaderProps) {
  const { logout } = useAuth();

  function renderDesktopHeader() {
    return (
      <div className="hidden md:flex justify-between items-center h-full">
        <Button
          clickDownEffect
          onClick={logout}
          className={`
          flex items-center gap-2
        `}
        >
          <MyImage
            src={arrowLeft}
            alt="Logo da aplicação"
            classNames="w-[24px]"
          />
          <p>Sair</p>
        </Button>
        <MyImage
          src={logo}
          alt="Logo da aplicação"
          classNames={`
              w-[35px] h-[35px]
            `}
        />
      </div>
    );
  }

  function renderMobileHeader() {
    return (
      <div className="flex justify-between flex-row-reverse items-center h-full md:hidden">
        <DropDownMenu  />
        <Filter mobile />
      </div>
    )
  }

  return (
    <header
      className={`
          h-[80px] border-b border-b-black-task-area px-6
        `}
    >
      {renderDesktopHeader()}
      {renderMobileHeader()}
    </header>
  );
}
