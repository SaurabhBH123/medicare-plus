import axios from "axios"

export const authLoginAPI = async (payload) => {
    const res = await axios.post(`http://localhost:4300/auth/login`,payload);
    return res.data;
}

