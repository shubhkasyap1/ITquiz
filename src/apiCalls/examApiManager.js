import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const getAuthToken = () => localStorage.getItem("token");


export const getAllQuizes=  (async () => {
    try {
        console.log(baseURL);
        const token = getAuthToken();
        const response = await axios.get(`${baseURL}/competition/all-quiz`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        console.log(response.data.data);
        // console.log(response.data['data'].question);
        return response.data['data'];

    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        throw error;
    }
});



export const getAllQuestions = (async (quizId) => {
    try {
        console.log(baseURL);
        const token = getAuthToken();
        const response = await axios.get(`${baseURL}/competition/question/${quizId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return response.data['data'];

    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        throw error;
    }
});