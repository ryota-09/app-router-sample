import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/todos">TodoList</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
}
