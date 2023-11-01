import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeLanguage } from "i18next";
import { LocaleType } from "../services/useUserData";

export type workspaceType = {
  workspaceId: string;
  workspaceName: string;
  workspaceIcon: string;
  favorites: string[];
};

export interface UserState {
  id: string;
  name: string;
  email: string;
  isDarkMode: boolean;
  locale: LocaleType;
  profilePicture: {
    url: string;
  };
  workspaces: workspaceType[];
}

export interface UserName {
  name: string;
}

const storedUserInfo = localStorage.getItem("userInfo");

const initialState: { userInfo: UserState | null } = {
  userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      changeLanguage(action.payload.locale || LocaleType.RU)
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("pageInfo");
      localStorage.removeItem("workspaceInfo");
      localStorage.removeItem("workspaceListState");
      localStorage.removeItem("activePage");
      localStorage.removeItem("pagesListState");
      localStorage.removeItem("favoritePagesListState");
      localStorage.removeItem("imagePosition");
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
