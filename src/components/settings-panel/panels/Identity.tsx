import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./account.module.scss";
import { useTranslation } from "react-i18next";

const Identity = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>{t('Domain management')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Verified domains')}</p>
              <p>
                {t('Verify ownership')}.
              </p>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Workspace creation')}</p>
              <p>{t('Customize who can create new workspaces')}.</p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.select}`}>
                <select name="workspace" id="workspace" disabled>
                  <option value="wo">{t('Owner')}</option>
                  <option value="ko">{t('Members')}</option>
                </select>
              </label>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Claim workspaces')}</p>
              <p>
                {t('Claim workspaces description')}.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.title}`}>{t('SAML Single sign-on (SSO)')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Enable')} SAML SSO</p>
              <p>
                {t('Anyone using email addresses with a verified domain can log in via')} SAML SSO.
              </p>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Login method')}</p>
              <p>{t('Customize how users access SAML SSO-enabled workspaces')}.</p>
            </div>
            <div className={`${styles.control}`}>
              <label className={`${styles.select}`}>
                <select name="login" id="login" disabled>
                  <option value="wo">{t('Any')}</option>
                  <option value="ko">{t('New')}</option>
                </select>
              </label>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Automatic account creation')}</p>
              <p>
                {t('Automatically create Notion accounts for new users who log in via')} SAML SSO.
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
              <p>{t('Linked workspaces')}</p>
              <p>
                {t('This SAML SSO configuration applies to the following other workspaces')}.{" "}
                <span>
                  <a href="/" target="blank">
                    {t('Contact Support')}
                  </a>
                </span>{" "}
                {t('to add or remove a workspace')}.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.title}`}>SCIM {t('provisioning')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>SCIM {t('tokens')}</p>
              <p>{t('Generate a token to configure')} SCIM.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.title}`}>{t('Setup information')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p></p>
              <p>{t('Workspace')} ID</p>
            </div>
            <div className={`${styles.control}`}>
              {/* workspaceId */}
              <p>workspaceId</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Identity;
