import { MyImage } from "../components/basicComponents/Image";
import { Main } from "../components/template/Main";
import desktopLogo from "public/images/desktop_logo.svg";
import { NextPage } from "next";
import { Button } from "../components/basicComponents/Button";
import { GoogleLogo } from "phosphor-react";
import { services } from "../service";
import Router from "next/router";
import { useAuth } from "../hooks/useAuth";

const Authenticate: NextPage = () => {
  const {loginWithGoogle} = useAuth()

  return (
    <Main>
      <div className="flex flex-col">
        <h1 className="font-extrabold text-6xl pt-16 pl-12">Do it!</h1>

        <div className="flex flex-col flex-1 items-center justify-center relative">
          <div>
            <h2 className="font-semibold text-base text-center pb-5">
              Faça login e aproveite!
            </h2>
            <Button
              clickDownEffect
              brightnessOnHover
              className="py-3 px-7 bg-my-gradient rounded-lg"
              onClick={loginWithGoogle}
            >
              <span className="font-semibold text-black-task-area">
                Entrar com o Google
              </span>{" "}
              <GoogleLogo
                color="#16161C"
                size={30}
                weight="bold"
                className="ml-4"
              />
            </Button>
          </div>
          <span
            className={`
            font-extralight text-xs absolute left-2 bottom-5
          `}
          >
            Não se preocupe, nós não guardamos nenhum dado seu!
          </span>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div
          className={`absolute top-0 left-0 w-full h-full flex justify-center items-center`}
        >
          <MyImage
            src={desktopLogo}
            alt="Desktop logo"
            classNames="w-96 h-96"
          />
        </div>
      </div>
    </Main>
  );
};

export default Authenticate;
