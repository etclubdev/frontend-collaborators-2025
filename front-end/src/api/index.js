import axios from "axios";

const ENV = process.env.REACT_APP_ENV.trim() || "development";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

console.log(API_BASE_URL);


let api;

if (ENV === 'local'){
    api = {
        get: async (url) => {
            if (url !== ""){
                const mockData = require(`../mocks/data${url}.json`);
                return { data: { data: mockData }} ;
            }            
            return { data: {data: []} };
        }
    }
} else {
    api = axios.create({
        baseURL: API_BASE_URL,
        timeout: 10000,
        headers: {"Content-Type": "application/json"}
    })
}

export { api };
