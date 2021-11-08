import axios from 'axios';
import { User } from './models/User';

export async function getUserList(rootUrl: string) {
  return axios.get(`${rootUrl}/users`);
}

export async function getUserById(
  rootUrl: string,
  id: string | number
): Promise<User> {
  return axios.get(`${rootUrl}/users/${id}`);
}

export async function saveNewUser(
  rootUrl: string,
  newUserData: any
): Promise<void> {
  axios.post(`${rootUrl}/users`, newUserData);
}

export async function updateExistingUser(
  rootUrl: string,
  id: string | number,
  data: any
): Promise<void> {
  axios.put(`${rootUrl}/users/${id}`, data);
}
