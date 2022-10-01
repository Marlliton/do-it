import type { NextPage } from "next";
import Head from "next/head";
import router from "next/router";
import { useEffect } from "react";
import { TaskArea } from "../components/TaskArea";
import { Main } from "../components/template/Main";
import { UserInformation } from "../components/UserInformation";
import { useAuth } from "../hooks/useAuth";
import Authenticate from "./authenticate";

const Home: NextPage = () => {
  const { loading, user } = useAuth();

  function renderContent() {
    return (
      <Main withHeader>
        <UserInformation imageUrl={user?.imgUrl} username={user?.name!} />
        <TaskArea />
      </Main>
    );
  }

  function renderLoading() {
    return (
      <div className="absolute w-full h-full top-0 left-0 bg-global-bg-and-task-bg flex justify-center items-center">
        <h1 className="text-9xl">Carregando </h1>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <meta name="description" content="Seu app de tarefas favorito." />
        <link
          rel="shortcut icon"
          href="images/small_logo_mobile.svg"
          type="image/svg"
        />
        <title>Do It!</title>
      </Head>
      {loading ? (
        renderLoading()
      ) : user?.email ? (
        renderContent()
      ) : (
        <Authenticate />
      )}
    </div>
  );
};

export default Home;
