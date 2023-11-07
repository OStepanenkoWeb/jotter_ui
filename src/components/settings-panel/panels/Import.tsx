import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./account.module.scss";
import { useTranslation } from "react-i18next";

const Import = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>{t('Import data')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>
                {t('You can easily import data from any of the following sources')}.
              </p>
              <p>
                {t('Import data attention')}
              </p>
            </div>
          </div>
          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Import;
