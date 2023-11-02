import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ReactComponent as Documino } from "../../assets/icons/documino.svg";
import LoginPanel from "../../components/login-panel";
import styles from "./login.module.scss";

const LogIn = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={`${styles.nav}`}>
        <Documino data-testid="logo" className={`${styles.logo}`} />
      </div>
      <div className={`${styles.panel}`}>
        <LoginPanel />
      </div>
    </div>
  );
};

export default LogIn;
