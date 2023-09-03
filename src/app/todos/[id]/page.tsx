import { Todo } from "@/types";

const getTodo = async (id: string) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function DetailPage({ params }) {
  console.log(params)
  const todo: Todo = await getTodo(params.id);
  
  return (
    <>
      <h1>Todo</h1>
      <div>
        {todo.title}
      </div>
    </>
  );
}
