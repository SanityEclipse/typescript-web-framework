import axios from 'axios';
import { User } from './models/User';

const urlDomain = 'http://localhost:3000';

export async function getUserById(id: string | number): Promise<User> {
  return axios.get(`${urlDomain}/users/${id}`);
}

export async function saveUser(): Promise<void> {}
