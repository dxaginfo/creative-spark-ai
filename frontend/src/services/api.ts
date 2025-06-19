import axios from 'axios';
import { Idea } from '../store/slices/ideasSlice';
import { IdeaFormData } from '../components/idea/IdeaForm';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  token: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  company?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// Auth APIs
export const authAPI = {
  register: (data: RegisterData) => api.post<AuthResponse>('/auth/register', data),
  login: (data: LoginData) => api.post<AuthResponse>('/auth/login', data),
  me: () => api.get('/users/me')
};

// Ideas APIs
export const ideasAPI = {
  generate: (data: IdeaFormData) => api.post<Idea[]>('/ideas/generate', data),
  getAll: () => api.get<Idea[]>('/ideas'),
  getById: (id: string) => api.get<Idea>(`/ideas/${id}`),
  save: (id: string, data: Partial<Idea>) => api.put<Idea>(`/ideas/${id}`, data),
  delete: (id: string) => api.delete(`/ideas/${id}`),
  share: (id: string, email: string) => api.post(`/ideas/${id}/share`, { email })
};

// Analytics APIs
export const analyticsAPI = {
  getUsage: () => api.get('/analytics/usage'),
  getPerformance: () => api.get('/analytics/performance')
};

export default api;
