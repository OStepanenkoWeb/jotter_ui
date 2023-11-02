import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ReactComponent as Documino } from "../../assets/icons/documino.svg";
import RegisterPanel from "../../components/register-panel";
import styles from "./register.module.scss";

const Register = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={`${styles.nav}`}>
        <Documino data-testid="logo" className={`${styles.logo}`} />
      </div>
      <div className={`${styles.panel}`}>
        <RegisterPanel />
      </div>
    </div>
  );
};

export default Register;
