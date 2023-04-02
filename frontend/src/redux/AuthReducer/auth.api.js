import axios from "axios"

export const authLoginAPI = async (payload) => {
    const res = await axios.post(`https://kind-jade-eagle-sari.cyclic.app/auth/login`,payload);
    return res.data;
}

