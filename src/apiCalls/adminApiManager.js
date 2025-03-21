import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const getAuthToken = () => localStorage.getItem("token");
const token = getAuthToken();


// Get All Student Data
export const getAllStudent = (async () => {
    try {
        const response = await axios.get(`${baseURL}/admin/all-users`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        console.log(response.data['data']['data']);
        return response.data['data']['data'];

    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        throw error;
    }
});

// Add new student or user into the database
export const addNewStudent = async (username, name, dob, password) => {
    try {
        const response = await axios.post(`${baseURL}/auth/register`,
            {
                "name": name,
                "username": username,
                "dob": dob,
                "password": password,
            }, { headers: { "Content-Type": "application/json" }, });
        return response;
    } catch (error) {
        console.error("Error in addNewStudent:", error.response?.data || error.message);
        throw error;
    }
};



// Get All Quiz Data
export const getAllQuizzes = (async () => {
    try {
        const response = await axios.get(`${baseURL}/admin/all-quizzes`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        console.log(response.data['data']['data']);
        return response.data['data']['data'];

    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        throw error;
    }
});
// Add new quiz 
export const addNewQuiz = async (quizData) => {
    try {
        const response = await axios.post(`${baseURL}/admin/create-quiz`, quizData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
        console.error("Error in addNewStudent:", error.response?.data || error.message);
        throw error;
    }
}

// Get All the question of a quiz buy id
export const quizAllQuestions= async (id) => {
    try {
        console.log("My id is: ",id);
        const response = await axios.get(`${baseURL}/admin/get-question/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
        console.error("Error in quiz:", error.response?.data || error.message);
        throw error;
    }
}

// Add new quiz 
export const addNewQuestion = async (id,questionData) => {
    try {
        const response = await axios.post(`${baseURL}/admin/add-question/${id}`, questionData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
        console.error("Error in addNewStudent:", error.response?.data || error.message);
        throw error;
    }
}