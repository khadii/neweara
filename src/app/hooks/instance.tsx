// import { API_URL } from "@/constants/config";
import axios from "axios";
import { API_URL } from "./genral";

   export const instance = axios.create({
        baseURL: API_URL,
      });

