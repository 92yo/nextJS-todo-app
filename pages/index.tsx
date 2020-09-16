import Head from "next/head";
import { TodoList } from "../components/TodoList";
import { TodoNew } from "../components/TodoNew";

const Home = () => {
  return (
    <div>
      <Head>
        <title>To Do App</title>
        <link rel="icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css"
        />
      </Head>

      <TodoNew />
      <TodoList />
    </div>
  );
};

export default Home;
