import { MyImage } from "../components/basicComponents/Image";
import { Main } from "../components/template/Main";
import desktopLogo from "public/images/desktop_logo.svg";
import { NextPage } from "next";
import { Button } from "../components/basicComponents/Button";
import { GoogleLogo } from "phosphor-react";

const Authenticate: NextPage = () => {
  return (
    <Main>
      <div className="hidden md:flex flex-col">
        <h1 className="font-extrabold text-6xl pt-16 pl-12">Do it!</h1>

        <div className="flex flex-1 items-center justify-center">
          <div>
            <Button
              clickDownEffect
              brightnessOnHover
              className="py-3 px-7 bg-my-gradient rounded-lg"
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
        </div>
      </div>
      <div className="relative">
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
