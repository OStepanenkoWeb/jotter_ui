import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useThemeDetector } from "../../../hooks/useThemeDetector";
import styles from "./account.module.scss";
import { useUserData } from "../../../services/useUserData";
import { useAppSelector } from "../../../app/hooks";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slice/userSlice";
import { useTranslation } from "react-i18next";

const Notification = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const [mode, setMode] = useState("");
  const { mutate: mutateIsDarkMode } = useUserData.useUpdateIsDarkModeData();
  const dispatch = useDispatch();

  const isDarkMode = useThemeDetector();

  useEffect(() => {
    if (mode !== "") {
      localStorage.setItem("selectedMode", mode);
    }
  }, [mode]);

  useEffect(() => {
    const savedMode = localStorage.getItem("selectedMode");
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode("system");
    }
  }, []);

  const handleAppearance = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const mode = e.target.value;

    if (mode === "system") {
      setMode("system");
      isDarkMode ? setTheme("dark") : setTheme("light");
    } else if (mode === "dark") {
      const userData = {
        isDarkMode: true,
        userId: userInfo?.id!,
      };

      setMode("dark");
      setTheme("dark");
      mutateIsDarkMode(userData, {
        onSuccess: async (data) => {
          if (data) {
            const updatedIsDarkMode = data.isDarkMode;

            const updatedUser = {
              ...userInfo!,
              isDarkMode: updatedIsDarkMode,
            };

            dispatch(setUser(updatedUser));
          }
        },
      });
    } else {
      const userData = {
        isDarkMode: false,
        userId: userInfo?.id!,
      };

      setMode("light");
      setTheme("light");
      mutateIsDarkMode(userData, {
        onSuccess: async (data) => {
          if (data) {
            const updatedIsDarkMode = data.isDarkMode;

            const updatedUser = {
              ...userInfo!,
              isDarkMode: updatedIsDarkMode,
            };

            dispatch(setUser(updatedUser));
          }
        },
      });
    }
  };

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>{t('My notifications')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Mobile push notifications')}</p>
              <p>
                {t('Receive push notifications')}
              </p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.switch}`}>
                <input type="checkbox" disabled />
                <span className={`${styles.slider_round}`}></span>
              </label>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Email notifications')}</p>
              <p>
                {t('Receive email updates')}
              </p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.switch}`}>
                <input type="checkbox" disabled />
                <span className={`${styles.slider_round}`}></span>
              </label>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Slack notifications')}</p>
              <p>
                {t('Receive notifications')}
              </p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.select}`}>
                <select name="slack_notification" id="slack" disabled>
                  <option value="off">{t('Off')}</option>
                  <option value="on">{t('On')}</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.title}`}>{t('My settings')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Appearance')}</p>
              <p>{t('Customize how Notion looks on your device')}.</p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.select} ${styles.valid}`}>
                <select
                  name="appearance"
                  id="appearance"
                  value={mode}
                  onChange={handleAppearance}
                >
                  <option value="system">{t('System')}</option>
                  <option value="dark">{t('Dark')}</option>
                  <option value="light">{t('Light')}</option>
                </select>
              </label>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Open on start')}</p>
              <p>
                {t('Choose what to show')}
              </p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.select}`}>
                <select name="open_on_start" id="open_on_start" disabled>
                  <option value="system">{t('Last')}</option>
                  <option value="off">{t('Top')}</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.title}`}>{t('Privacy')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Cookie settings')}</p>
              <p>
                {t('Customize cookies')}. {t('See')}{" "}
                <span>
                  <a
                    href="https://www.notion.so/Cookie-Notice-bc186044eed5488a8387a9e94b14e58c"
                    target="blank"
                  >
                    {t('Cookie Notice')}
                  </a>
                </span>{" "}
                {t('for details')}.
              </p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.select}`}>
                <select name="cookie" id="cookie" disabled>
                  <option value="customize">{t('Customize')}</option>
                </select>
              </label>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Show my view history')}</p>
              <p>
                {t('People with edit')}.{" "}
                <span>
                  <a
                    href="https://www.notion.so/help/page-analytics"
                    target="blank"
                  >
                    {t('Learn more')}.
                  </a>
                </span>
                .
              </p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.select}`}>
                <select name="record" id="record" disabled>
                  <option value="record">{t('Record')}</option>
                  <option value="dont">{t('Don\'t')}</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
