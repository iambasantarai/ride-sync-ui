import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const apiService = axios.create({
  baseURL: apiUrl,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});
