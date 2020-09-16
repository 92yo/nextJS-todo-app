import { StoreProvider } from "../helpers/storeProvider";
import { TodoList } from "../store/TodoList";

const todoList = new TodoList(["Hello World!"]);

function MyApp({ Component, pageProps }: any) {
  return (
    <StoreProvider value={todoList}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
