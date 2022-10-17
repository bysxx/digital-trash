import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const getConfig = (): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {};

  return config;
};

export const getRequest = async <T>(url: string, query?: string): Promise<T> => {
  const reqQuery = `${query && query.length > 0 ? `?${query}` : ''}`;

  const result = await axios.get<T>(baseUrl + url + reqQuery, getConfig());

  return result.data;
};

export const postRequest = async <T>(url: string, body: any): Promise<T> => {
  const result = await axios.post<T>(baseUrl + url, body, getConfig());

  return result.data;
};
