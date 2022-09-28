import { Header } from "../basicComponents/header";

interface MainProps {
  children: any;
}

export function Main(props: MainProps) {
  return (
    <div
      className={`
      flex justify-center h-screen bg-global-bg-and-task-bg py-20 px-3 text-white
    `}
    >
      <div
        className={`
        w-full flex flex-col lg:max-w-7xl bg-black rounded-sm
        overflow-hidden
      `}
      >
        <Header />
        <div
          className={`
          grid grid-cols-template-columns h-full
        `}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
