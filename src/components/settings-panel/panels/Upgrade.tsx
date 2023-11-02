import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { ReactComponent as RightArrowIcon } from "../../../assets/icons/right-arrow.svg";
import styles from "./account.module.scss";
import { useTranslation } from "react-i18next";

const Upgrade = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>{t('Upgrade')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Upgrade your plan')}</p>
              <p>
                {t('Upgrade your plan description')}.
              </p>
            </div>
            <div
              className={`${styles.control}`}
              onClick={() =>
                window.open(
                  "https://www.notion.so/help/upgrade-or-downgrade-your-plan",
                  "blank"
                )
              }
            >
              <div className={`${styles.icon}`}>
                <RightArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
