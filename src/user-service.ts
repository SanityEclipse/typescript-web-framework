import axios from 'axios';
import { User } from './models/User';

const rootUrl = 'http://localhost:3000';

export async function getUserList() {
  return axios.get(`${rootUrl}/users`);
}

export async function getUserById(id: string | number): Promise<User> {
  return axios.get(`${rootUrl}/users/${id}`);
}

export async function saveNewUser(newUserData: any): Promise<void> {
  axios.post(`${rootUrl}/users`, newUserData);
}

export async function updateExistingUser(
  id: string | number,
  data: any
): Promise<void> {
  axios.put(`${rootUrl}/users/${id}`, data);
}
