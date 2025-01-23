import axios from "axios";

// Set config defaults when creating the instance
export const baseURL = axios.create({
    baseURL: 'http://81.200.153.83/api/v1'
  });
