import axios from "axios";
import { HOST } from "../utils/constrants";

console.log("HOST: ", HOST);
export const apiClient = axios.create({
    baseURL: HOST,
    
})