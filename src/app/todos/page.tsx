import type { Metadata } from "next";

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "todos",
  description: "This is Todo list page",
};

const getTodoList = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    return response.json()
  } catch (error){
    console.error(error)
  }
}

export default async function TodosPage() {
  
  const todos = await getTodoList();
  return (
    <>
      <h1>Todos</h1>
      <p>{String(todos[0].title)}</p>
    </>
  );
}
