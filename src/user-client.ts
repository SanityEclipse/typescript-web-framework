import axios, { AxiosResponse } from 'axios';

export async function getUserList(rootUrl: string) {
  return axios.get(`${rootUrl}/users`);
}

export async function getUserById(
  rootUrl: string,
  id: string | number
) {
  return axios.get(`${rootUrl}/users/${id}`);
}

export async function saveNewUser(
  rootUrl: string,
  newUserData: any
) {
  return axios.post(`${rootUrl}/users`, newUserData);
}

export async function updateExistingUser(
  rootUrl: string,
  id: string | number,
  data: any
) {
  return axios.put(`${rootUrl}/users/${id}`, data);
}
