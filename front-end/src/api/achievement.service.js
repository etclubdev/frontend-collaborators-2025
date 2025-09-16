import { api } from "./index";

const getAchievement = async () => {
    try {
        const response = await api.get('/achievements');
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { getAchievement }