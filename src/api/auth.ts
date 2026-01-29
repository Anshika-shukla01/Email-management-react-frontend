import { apiFetch } from './client';

export function registerUser(email: string, password: string) {
  return apiFetch('/register', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
}

export function loginUser(email: string, password: string) {
  return apiFetch('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
}

export function logoutUser() {
  localStorage.removeItem('token');
}
