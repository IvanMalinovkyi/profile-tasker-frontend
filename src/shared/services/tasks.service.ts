import { axiosWithAuth } from "../api/interceptors";
import { ITask, TypeTaskFormState } from "../types/task.types";

class TaskService {
  private BASE_URL = "/tasks";

  async getTasks() {
    const response = await axiosWithAuth.get<ITask[]>(this.BASE_URL);

    return response.data;
  }

  async createTask(data: TypeTaskFormState) {
    const response = await axiosWithAuth.post<ITask>(this.BASE_URL, data);

    return response.data;
  }

  async updateTask(id: string, data: TypeTaskFormState) {
    const response = await axiosWithAuth.put<ITask>(
      `${this.BASE_URL}/${id}`,
      data
    );

    return response.data;
  }

  async delete(id: string) {
    const response = await axiosWithAuth.delete<ITask>(
      `${this.BASE_URL}/${id}`
    );

    return response;
  }
}

export const taskService = new TaskService();
