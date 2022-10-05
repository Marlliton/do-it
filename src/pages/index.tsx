import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { TaskArea } from "../components/TaskArea";
import { Main } from "../components/template/Main";
import { UserInformation } from "../components/UserInformation";
import { TypeFilter } from "../core/shared/TypeFilter";
import ListTasks from "../core/task/ListTasks";
import Task from "../core/task/Task";
import { useAuth } from "../hooks/useAuth";
import { useTask } from "../hooks/useTask";
import Authenticate from "./authenticate";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [taskForEditing, setTaskForEditing] = useState<Task | null>(null);
  const { loading, user } = useAuth();
  const { consultTasks, saveTask, updateTask, setListTasks, listTasks, destroyTask } = useTask();

  useEffect(() => {
    (async function () {
      if (user?.email) {
        const listTasks = await consultTasks();

        setListTasks(
          new ListTasks({ tasks: listTasks, filter: TypeFilter.NONE })
        );
      }
    })();
  }, [user?.email]);

  function handleSubmit(e: React.FormEvent, inputData: any) {
    e.preventDefault();

    if (taskForEditing) {
      updateTask(taskForEditing, {
        title: inputData.title,
        description: inputData.description,
      } as Task);

      setTaskForEditing(null);
    } else {
      saveTask({
        title: inputData.title,
        description: inputData.description,
      } as Task);
    }
  }


  function renderContent() {
    return (
      <Main withHeader>
        <UserInformation imageUrl={user?.imgUrl} username={user?.name!} />
        <TaskArea
          listTasks={listTasks}
          onChangeModal={() => setShowModal(!showModal)}
          onModifyTask={updateTask}
          onDelete={destroyTask}
          editTask={setTaskForEditing}
        />
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
      {showModal && (
        <Modal
          task={taskForEditing}
          closeModal={() => {
            setShowModal(false);
            setTaskForEditing(null);
          }}
          onSubmit={handleSubmit}
        />
      )}
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
