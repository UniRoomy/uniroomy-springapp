import Link from "next/link";
import navStyles from "../styles/web/Nav.module.css";

interface Props {}

// Will need to check loginStatus state -> then display relevant nav-links

export default function Nav({}: Props) {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
