import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./account.module.scss";
import { useTranslation } from "react-i18next";

const Billing = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>{t('Billing')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Workspace balance')}</p>
              <p></p>
            </div>
            <div className={`${styles.control}`}>
              <p>$0</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.title}`}>{t('Invoices')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p> </p>
              <p>{t('This workspace has no payments yet')}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
