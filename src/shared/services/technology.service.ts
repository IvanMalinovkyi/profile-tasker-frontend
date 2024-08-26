import { axiosClassic } from "../api/interceptors";
import { ITechnologies } from "../types/technologies.types";

class TechnologyService {
  private BASE_URL = "/technology";

  async getAll() {
    const response = await axiosClassic.get<ITechnologies[]>(this.BASE_URL);

    return response;
  }
}

export const technologyService = new TechnologyService();
