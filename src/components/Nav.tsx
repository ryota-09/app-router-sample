import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}
