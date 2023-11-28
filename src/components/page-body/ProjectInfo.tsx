import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import websiteImg from "../../assets/images/profile/website.jpg";
import githubImg from "../../assets/images/profile/github.jpg";
import twitterImg from "../../assets/images/profile/twitter.jpg";
import linkedInImg from "../../assets/images/profile/linkedin.jpg";
import cvImg from "../../assets/images/profile/cv.jpg";
import styles from "./projectInfo.module.scss";

type ProjectInfoProps = {
  open: boolean;
  onClose: () => void;
};

const ProjectInfo: React.FC<ProjectInfoProps> = ({ open, onClose }) => {
  const { theme } = useContext(ThemeContext);

  if (!open) return null;

  return (
    <>
      <div
        className={`${styles.project_info_background} ${styles[theme]}`}
        onClick={onClose}
      >
        <div
          className={`${styles.project_info}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={`${styles.title}`}>Информация о проекте</div>
          <a
            href="/"
            target="blank"
            className={`${styles.tab}`}
          >
            <div className={`${styles.img}`}>
              <img src={websiteImg} alt="Информация" />
            </div>
            <div className={`${styles.info}`}>Информация</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
