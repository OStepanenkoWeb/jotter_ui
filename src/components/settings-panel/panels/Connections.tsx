import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./account.module.scss";
import { useTranslation } from "react-i18next";

const Connections = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>{t('Connections')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Restrict members from adding connections')}</p>
              <p>{t('Workspace members can install any new connection')}.</p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.select}`}>
                <select name="restriction" id="restriction" disabled>
                  <option value="re">{t('Restriction')}</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.title}`}>{t('All connections')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p> </p>
              <p>{t('This workspace has no connections yet')}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
