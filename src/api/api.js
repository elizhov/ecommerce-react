import { API_URL } from "./constants.js";

const fetchData = async () => {
    try {
        const response = await fetch(API_URL);

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
};

export default fetchData;