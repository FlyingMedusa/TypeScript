import fetch from "node-fetch";

interface SingleTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getTodo(id: number): Promise<SingleTodo> {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await resp.json();
}

(async () => {
  const todo = await getTodo(10);
  console.log(todo.title, ":", todo.completed ? "done" : "to be done");
})();
