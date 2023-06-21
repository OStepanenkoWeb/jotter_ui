import React, { useContext, useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { ReactComponent as RightArrowIcon } from "../../../assets/icons/right-arrow.svg";
import { ThemeContext } from "../../../context/ThemeContext";
import { useUserData } from "../../../services/useUserData";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slice/userSlice";
import styles from "./account.module.scss";

const Account = () => {
  const { theme } = useContext(ThemeContext);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const [name, setName] = useState("");
  const { mutate: mutateUpdateName } = useUserData.useUpdateUserNameData();
  const { mutate: mutateDeleteUser } = useUserData.useDeleteUserData();
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

    mutateDeleteUser(userData);
    // console.log("deleted succesfully");
    // TODO redirect to registe page
  };

  useEffect(() => {
    setName(userInfo?.name || "");
  }, [userInfo?.name]);

  return (
    <div className={`${styles.panel} ${styles[theme]}`}>
      <div>
        <div className={`${styles.title}`}>My profile</div>
        <div className={`${styles.body}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.profile_picture}`}>
              {/* TODO: add feature to upload picture */}
              <img src={`${userInfo?.profilePicture.url}`} alt="dp" />
              <p>Add Photo</p>
            </div>
            <div className={`${styles.change_name}`}>
              <p>Preferred name</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
                <button type="submit">Change name</button>
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
              <button>Change email</button>
            </div>
          </div>
          <div className={`${styles.value_control}`}>
            <div className={`${styles.key}`}>
              <p>Password</p>
              <p>Set a permanent password to login to your account.</p>
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
              <p>2-step verification</p>
              <p>
                Add an additional layer of security to your account during
                login.
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
              <p>Support access</p>
              <p>
                Grant Notion support temporary access to your account so we can
                troubleshoot problems or recover content on your behalf. You can
                revoke access at any time.
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
              <p>Log out of all devices</p>
              <p>
                Log out of all other active sessions on other devices besides
                this one.
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
              <p className={`${styles.danger}`}>Delete my account</p>
              <p>
                Permanently delete the account and remove access from all
                workspace.
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
