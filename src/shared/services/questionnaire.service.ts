import { axiosWithAuth } from "../api/interceptors";
import {
  IQuestionnaire,
  TypeQuestionnaireFormState,
} from "../types/questionnaire.types";

class QuestionnaireService {
  private BASE_URL = "/questionnaire";

  async getQuestionnaire() {
    const response = await axiosWithAuth.get<IQuestionnaire>(this.BASE_URL);

    return response.data;
  }

  async createQuestionnaire(data: TypeQuestionnaireFormState) {
    const response = await axiosWithAuth.post<IQuestionnaire>(
      this.BASE_URL,
      data
    );

    return response;
  }

  async updateQuestionnaire(id: string, data: TypeQuestionnaireFormState) {
    const response = await axiosWithAuth.put<IQuestionnaire>(
      `this.BASE_URL/${id}`,
      data
    );

    return response;
  }

  async deleteQuestionnaire(id: string) {
    return await axiosWithAuth.delete<string>(`${this.BASE_URL}/${id}`);
  }
}

export const questionnaireService = new QuestionnaireService();
