import { Header } from "../basicComponents/Header";

interface MainProps {
  children: any;
  withHeader?: boolean;
}

export function Main(props: MainProps) {
  return (
    <div
      className={`
      flex justify-center h-screen bg-global-bg-and-task-bg md:py-20 md:px-3 text-white
    `}
    >
      <div
        className={`
        w-full flex flex-col lg:max-w-7xl bg-black rounded-sm
        overflow-hidden
      `}
      >
        {props.withHeader && <Header />}
        <div
          className={`
          grid grid-cols-sm-columns md:grid-cols-md-columns lg:grid-cols-lg-columns h-full
        `}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
