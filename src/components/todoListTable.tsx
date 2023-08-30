import { Todo } from "@/types";

export default function TodoListTable(todoList: Todo[]) {
  return (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todo, index) => (
          <tr key={index}>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}>
            <a href="https://jsonplaceholder.typicode.com/">
              Powered by Json PlaceHolder
            </a>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
