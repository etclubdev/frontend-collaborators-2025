import { api } from "./index";

const getStatusOfFirstRecruitment = async () => {
  try {
    const response = await api.get("/recruitment");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getStatusOfFirstRecruitment }