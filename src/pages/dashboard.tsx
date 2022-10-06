import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { TaskArea } from "../components/TaskArea";
import { Main } from "../components/template/Main";
import { UserInformation } from "../components/UserInformation";
import { TypeFilter } from "../core/shared/TypeFilter";
import ListTasks from "../core/task/ListTasks";
import Task from "../core/task/Task";
import { useAuth } from "../hooks/useAuth";
import { useTask } from "../hooks/useTask";

const Dashboard: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [taskForEditing, setTaskForEditing] = useState<Task | null>(null);
  const { loading, user } = useAuth();
  const { consultTasks, saveTask, updateTask, setListTasks, listTasks, destroyTask} = useTask();

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
      {renderContent()}
    </div>
  );
};


export default Dashboard;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookie = ctx.req.cookies;

  if (!cookie["do-it"]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
