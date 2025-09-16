import { api } from "./index";

const createApplication = async (payload) => {
    const response = await api.post("/applications", payload);
    return response;
};

export { createApplication }