import React, { useContext } from "react";
import styles from "./comment.module.scss";
import { ReactComponent as DownExpandIcon } from "../../assets/icons/down-expand.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const History = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={`${styles.header}`}>
        <p>{t('History')}</p>
        <div className={`${styles.button}`}>
          <p>{t('Open')}</p>
          <div className={`${styles.icon}`}>
            <DownExpandIcon />
          </div>
        </div>
      </div>
      <div className={`${styles.body}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.icon}`}></div>
          <p>{t('No updated History yet')}</p>
          <p>{t('complete History of this workspace will appear here')}</p>
        </div>
      </div>
    </div>
  );
};

export default History;
