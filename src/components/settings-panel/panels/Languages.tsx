import {ChangeEvent, useContext} from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./account.module.scss";

import { useTranslation } from 'react-i18next';
import { LocaleType, useUserData } from "../../../services/useUserData";
import { setUser } from "../../../slice/userSlice";
import { useAppSelector } from "../../../app/hooks";
import { useDispatch } from "react-redux";

const Languages = () => {
  const { theme } = useContext(ThemeContext);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { mutate: mutateLocale } = useUserData.useUpdateLocaleData();

  const handleLanguageChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const userData = {
      locale: e.target.value as LocaleType,
      userId: userInfo?.id!,
    };
    mutateLocale(userData, {
      onSuccess: async (data) => {
        if (data) {
          const updatedLocale = data.locale;

          const updatedUser = {
            ...userInfo!,
            locale: updatedLocale,
          };

          dispatch(setUser(updatedUser));
        }
      },
    });
  }

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>{t('Language & region')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Language')}</p>
              <p>{t('Change language')}</p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.select}`}>
                <select name="language" id="language" onChange={handleLanguageChange} value={userInfo?.locale}>
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                </select>
              </label>
            </div>
          </div>
          <div className={`${styles.divider}`}></div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Start week on Monday')}</p>
              <p>{t('Start week description')}</p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.switch}`}>
                <input type="checkbox" disabled />
                <span className={`${styles.slider_round}`}></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
