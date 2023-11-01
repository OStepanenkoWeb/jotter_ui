import React, { useContext, useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { ReactComponent as RightArrowIcon } from "../../../assets/icons/right-arrow.svg";
import { ThemeContext } from "../../../context/ThemeContext";
import { useUserData } from "../../../services/useUserData";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slice/userSlice";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { v4 } from "uuid";
import styles from "./account.module.scss";
import { useTranslation } from "react-i18next";

const Account = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const [name, setName] = useState("");

  const { mutate: mutateUpdateName } = useUserData.useUpdateUserNameData();
  const { mutate: mutateDeleteUser } = useUserData.useDeleteUserData();
  const { mutate: mutateUploadUserProfilePicture } =
    useUserData.useUploadUserProfilePictureData();
  const dispatch = useDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const userId = userInfo?.id;

    const userData = {
      name: name!,
      userId: userId!,
    };

    mutateUpdateName(userData, {
      onSuccess: async (data) => {
        if (data) {
          const updatedName = data.name;

          const updatedUser = {
            ...userInfo!,
            name: updatedName,
          };

          dispatch(setUser(updatedUser));
        }
      },
    });
  };

  const handleDelete = () => {
    const userData = { userId: userInfo?.id! };

    mutateDeleteUser(userData, {
      onSuccess: async () => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("pageInfo");
        localStorage.removeItem("workspaceInfo");
        localStorage.removeItem("workspaceListState");
        localStorage.removeItem("activePage");
        localStorage.removeItem("pagesListState");
        localStorage.removeItem("favoritePagesListState");
        localStorage.removeItem("imagePosition");
        window.location.reload();
      },
    });
  };

  useEffect(() => {
    setName(userInfo?.name || "");
  }, [userInfo?.name]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage === null) return;
    const imageRef = ref(storage, `profile/${selectedImage?.name + v4()}`);
    uploadBytes(imageRef, selectedImage!).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const userData = {
          userId: userInfo?.id!,
          url,
        };
        mutateUploadUserProfilePicture(userData, {
          onSuccess: async () => {
            const updatedUser = {
              ...userInfo!,
              profilePicture: {
                url,
              },
            };

            dispatch(setUser(updatedUser));
          },
        });
      });
    });
  };

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>{t('My profile')}</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.profile_picture}`}>
              <label htmlFor="file-upload" className={`${styles.file_upload}`}>
                <img src={userInfo?.profilePicture.url} alt="dp" />
              </label>
              <p>{t('Add Photo')}</p>
              <input id="file-upload" type="file" onChange={handleFileUpload} />
            </div>
            <div className={`${styles.change_name}`}>
              <p>{t('Preferred name')}</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
                <button type="submit">{t('Change name')}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.title}`}>Account security</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>Email</p>
              <p>{userInfo?.email}</p>
            </div>
            <div className={`${styles.control}`}>
              <button>{t('Change email')}</button>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Password')}</p>
              <p>{t('Set password')}</p>
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
              <p>{t('2 - step verification')}</p>
              <p>
                {t('2-step description')}
              </p>
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
      <div>
        <div className={`${styles.title}`}>Support</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>{t('Support access')}</p>
              <p>
                {t('Support access description')}
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
              <p>{t('Log out of all devices')}</p>
              <p>
                {t('Log out of all devices description')}
              </p>
            </div>
            <div className={`${styles.control} ${styles.not_allowed}`}>
              <div className={`${styles.icon}`}>
                <RightArrowIcon />
              </div>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p className={`${styles.danger}`}>{t('Delete my account')}</p>
              <p>
                {t('Permanently delete description')}
              </p>
            </div>
            <div className={`${styles.control}`}>
              <div className={`${styles.icon}`} onClick={handleDelete}>
                <RightArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
