import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";

const Navigation = (props) => {

  const ctx = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <h1>A Typical Page</h1>
          </li>
        </ul>
        {ctx.isLoggedIn && (
          <ul>
            <li>Home</li>
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
