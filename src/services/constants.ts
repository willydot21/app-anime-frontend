
export const baseUrl = 'http://localhost:3001';

export const authUrl = 'http://localhost:3001/auth/user';

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