import { axiosWithAuth } from "../api/interceptors";
import { IUser, TypeUserForm } from "../types/auth.types";

class UserService {
  private BASE_URL = "/user";

  async getUser() {
    const response = await axiosWithAuth.get<IUser>(this.BASE_URL);

    return response.data;
  }

  async updateUser(data: TypeUserForm) {
    const response = await axiosWithAuth.put<IUser>(this.BASE_URL, data);

    return response.data;
  }

  async deleteUser(id: string) {
    return await axiosWithAuth.delete<string>(`${this.BASE_URL}/${id}`);
  }

  async getAllUser() {
    return await axiosWithAuth.get<IUser[]>(`${this.BASE_URL}/getAll`);
  }
}

export const userService = new UserService();
