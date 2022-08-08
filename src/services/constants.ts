
export const baseUrl = 'https://app-anime-backend.herokuapp.com';

export const authUrl = 'https://app-anime-backend.herokuapp.com/auth/user';

export const getFetchOptions = (body: string = '', method: string = 'POST'): RequestInit => ({
  method,
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: body,
});

export const getOptions: RequestInit = {
  method: 'GET',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' }
}