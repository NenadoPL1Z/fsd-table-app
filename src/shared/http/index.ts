import axios from "axios";
import { TIMEOUT } from "@/shared/config";

const createInstance = () => {
  const config = axios.create({
    timeout: TIMEOUT,
  });

  return config;
};

export const apiInstance = createInstance();
