import React, { useContext } from "react";
import styles from "./comment.module.scss";
import { ReactComponent as CommentSidebarIcon } from "../../assets/icons/comment-sidebar.svg";
import { ReactComponent as DownExpandIcon } from "../../assets/icons/down-expand.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Comment = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={`${styles.header}`}>
        <p>{t('Comments')}</p>
        <div className={`${styles.button}`}>
          <p>{t('Open')}</p>
          <div className={`${styles.icon}`}>
            <DownExpandIcon />
          </div>
        </div>
      </div>
      <div className={`${styles.body}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.icon}`}>
            <CommentSidebarIcon />
          </div>
          <p>{t('No open comments yet')}</p>
          <p>{t('Open comments on this page will appear here')}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
