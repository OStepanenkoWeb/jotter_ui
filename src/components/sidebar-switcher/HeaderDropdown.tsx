import React, { useContext, useState } from "react";
import { ReactComponent as SquarePlusIcon } from "../../assets/icons/square-plus.svg";
import { ReactComponent as CircleCrossIcon } from "../../assets/icons/circle-cross.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch } from "react-redux";
import { logout } from "../../slice/userSlice";
import CreateWorkspace from "./CreateWorkspace";
import styles from "./headerDropdown.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type HeaderDropdownProps = {
  openHeader: boolean;
  onCloseHeader: () => void;
  onCloseSwitcherDropDown: () => void;
};

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  openHeader,
  onCloseHeader,
  onCloseSwitcherDropDown,
}) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [openCreateWorkspace, setOpenCreateWorkspace] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (!openHeader) return null;

  return (
    <>
      <div
        className={`${styles.header_dropdown_background} ${styles[theme]}`}
        onClick={onCloseHeader}
      >
        <div
          className={`${styles.header_dropdown}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className={`${styles.tab}`}
            onClick={() => {
              setOpenCreateWorkspace(true);
            }}
          >
            <div className={`${styles.icon}`}>
              <SquarePlusIcon />
            </div>
            <p>{t('Join or create workspace')}</p>
          </div>
          <div className={`${styles.tab}`} onClick={handleLogout}>
            <div className={`${styles.icon}`}>
              <CircleCrossIcon />
            </div>
            <p>{t('Log out')}</p>
          </div>
        </div>
      </div>
      <CreateWorkspace
        createWorkspaceOpen={openCreateWorkspace}
        createWorkspaceOnClose={() => setOpenCreateWorkspace(false)}
        headerOnClose={onCloseHeader}
        onCloseSwitcherDropDown={onCloseSwitcherDropDown}
      />
    </>
  );
};

export default HeaderDropdown;
