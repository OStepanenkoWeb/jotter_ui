import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { ReactComponent as RightArrowIcon } from "../../../assets/icons/right-arrow.svg";
import styles from "./account.module.scss";
import { useTranslation } from "react-i18next";

const Members = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>{t('Members')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Invite link')}</p>
              <p>
                {t('Invite link description')}.
              </p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.switch}`}>
                <input type="checkbox" disabled />
                <span className={`${styles.slider_round}`}></span>
              </label>
            </div>
          </div>
          <div className={`${styles.divider}`}></div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Members')}</p>
              <p>
                {t('Members description')}.
              </p>
            </div>
            <div
              className={`${styles.control}`}
              onClick={() =>
                window.open(
                  "https://www.notion.so/help/invoices-and-proration",
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

export default Members;
