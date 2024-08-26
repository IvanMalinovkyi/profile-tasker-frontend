import { axiosClassic } from "../api/interceptors";
import { IAuthForm, IAuthResponse } from "../types/auth.types";
import {
  getRefreshToken,
  removeFromStorage,
  saveTokenToStorage,
} from "./auth-token.service";

class AuthService {
  async main(type: "login" | "register", data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(
      `/auth/${type}`,
      data
    );

    if (response.data.accessToken && response.data.refreshToken)
      saveTokenToStorage(response.data.accessToken, response.data.refreshToken);

    return response;
  }

  async getNewTokens() {
    const refreshToken = getRefreshToken();

    if (!refreshToken) throw new Error("No refresh token available");

    const response = await axiosClassic.post<IAuthResponse>(
      "auth/login/access-token",
      { refreshToken }
    );

    if (response.data.accessToken && response.data.refreshToken)
      saveTokenToStorage(response.data.accessToken, response.data.refreshToken);

    return response;
  }

  async logout() {
    const response = await axiosClassic.post<boolean>("/auth/logout");

    if (response.data) removeFromStorage();

    return response;
  }
}

export const authService = new AuthService();
