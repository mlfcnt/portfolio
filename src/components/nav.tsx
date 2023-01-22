import Link from "next/link";

export const Nav = () => {
  const navItemStyle = "text-3xl";
  return (
    <nav className="mb-8">
      <ol>
        <li className={navItemStyle}>
          <Link href={"/recent-activity"}>Personnal experiments</Link>{" "}
        </li>
        <li className={navItemStyle}>
          <Link href={"/recent-activity"}>Work experiences</Link>
        </li>
        <li className={navItemStyle}>
          <Link href={"/"}>Contact</Link>
        </li>
      </ol>
    </nav>
  );
};
