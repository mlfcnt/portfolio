import Link from "next/link";

export const Nav = () => (
  <nav>
    <ol>
      <li className="text-4xl">
        <Link className="active" href={"/"}>
          Highlighted projects{" "}
        </Link>
      </li>
      <li className="text-4xl">
        <Link href={"/recent-activity"}>Recent activity</Link>
      </li>
      <li className="text-3xl">
        <Link href={"/"}>Contact</Link>
      </li>
    </ol>
  </nav>
);
