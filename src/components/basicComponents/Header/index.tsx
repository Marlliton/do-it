import { MyImage } from "../Image";
import logo from "public/images/small_logo_mobile.svg";
import arrowLeft from "public/images/back.svg";

export function Header() {
  return (
    <header
      className={`
          h-[80px] border-b border-b-black-task-area   flex justify-between items-center px-6
        `}
    >
      <button
        className={`
        flex items-center gap-2 transition-colors brightness-90 hover:brightness-100
      `}
      >
        <MyImage
          src={arrowLeft}
          alt="Logo da aplicação"
          classNames="w-[24px]"
        />
        <p>Sair</p>
      </button>
      <MyImage
        src={logo}
        alt="Logo da aplicação"
        classNames={`
            w-[35px] h-[35px]
          `}
      />
    </header>
  );
}
