import React, { useContext, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { ReactComponent as DotsIcon } from "../../assets/icons/dots.svg";
import HeaderDropdown from "./HeaderDropdown";
import styles from "./switcherDropdown.module.scss";
import WorkspaceDisplayList from "./WorkspaceDisplayList";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch } from "react-redux";
import { logout } from "../../slice/userSlice";
import AddAccount from "./AddAccount";
import { useNavigate } from "react-router-dom";

type SwitcherDropdownProps = {
  open: boolean;
  onClose: () => void;
};

const SwitcherDropdown: React.FC<SwitcherDropdownProps> = ({
  open,
  onClose,
}) => {
  const { theme } = useContext(ThemeContext);
  const [openHeaderDropdown, setOpenHeaderDropdown] = useState<boolean>(false);
  const [openAddAccount, setOpenAddAccount] = useState<boolean>(false);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleGetMac = () => {
    window.open("https://www.notion.so/desktop", "_blank");
  };

  if (!open) return null;

  return (
    <>
      <div
        className={`${styles.dropdown_background} ${styles[theme]}`}
        onClick={onClose}
      >
        <div
          className={`${styles.dropdown}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={`${styles.header}`}>
            <div className={`${styles.header_title}`}>{userInfo?.email}</div>
            <div
              className={`${styles.dots_icon}`}
              onClick={() => {
                setOpenHeaderDropdown(true);
              }}
            >
              <DotsIcon />
            </div>
          </div>
          <WorkspaceDisplayList />
          <div className={`${styles.options}`}>
            <div
              className={`${styles.option}`}
              onClick={() => {
                setOpenAddAccount(true);
              }}
            >
              Add another account
            </div>
            <div className={`${styles.option}`} onClick={handleLogout}>
              Log out
            </div>
            <div className={`${styles.option}`} onClick={handleGetMac}>
              Get Mac app
            </div>
          </div>
        </div>
      </div>
      <HeaderDropdown
        openHeader={openHeaderDropdown}
        onCloseHeader={() => setOpenHeaderDropdown(false)}
      />
      <AddAccount
        addAccountOpen={openAddAccount}
        addAccountOnClose={() => setOpenAddAccount(false)}
      />
    </>
  );
};

export default SwitcherDropdown;
