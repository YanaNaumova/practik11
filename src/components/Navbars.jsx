import { Link, useLocation } from "react-router-dom";
import styles from "./styes.module.css";

function Navbars() {
  const { pathname } = useLocation();
  if (pathname === "/home") {
    document.title = "Home";
  } else if (pathname === "/users") {
    document.title = "Users";
  } else {
    document.title = "UserProfile";
  }

  return (
    <ul className={styles.container}>
      <li className={styles.liStyle}>
        <Link to="/home" className={styles.link}>
          Home
        </Link>
      </li>
      <li className={styles.liStyle}>
        <Link to="/users" className={styles.link}>
          Users
        </Link>
      </li>
    </ul>
  );
}
export default Navbars;
