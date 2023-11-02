import { useContext, useState } from "react";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";
import SwitcherDropdown from "./SwitcherDropdown";
import { useAppSelector } from "../../app/hooks";
import styles from "./sidebarSwitcher.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { ReactComponent as SedoLogo } from "../../assets/icons/sedo.svg";

const SidebarSwitcher = () => {
  const { theme } = useContext(ThemeContext);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const workspaceInfo = useAppSelector(
    (state) => state.workspace.workspaceInfo
  );

  return (
    <>
      <div
        className={`${styles.sidebar_switcher} ${styles[theme]}`}
        onClick={() => {
          setOpenDropdown(true);
        }}
      >
        <div className={`${styles.icon}`}>
          <SedoLogo />
        </div>
        <div className={`${styles.name}`}>{workspaceInfo?.name}</div>
        <div className={`${styles.expand}`}>
          <ExpandIcon />
        </div>
      </div>
      <SwitcherDropdown
        open={openDropdown}
        onClose={() => setOpenDropdown(false)}
      />
    </>
  );
};

export default SidebarSwitcher;
