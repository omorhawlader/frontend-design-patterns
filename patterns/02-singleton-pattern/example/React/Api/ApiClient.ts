import axios, { AxiosError, type AxiosInstance } from 'axios';


class AuthenticatedApiClient {
    private static instance: AuthenticatedApiClient;

    public static get Getinstance(): AuthenticatedApiClient {
        if (!AuthenticatedApiClient.instance) {
            AuthenticatedApiClient.instance = new AuthenticatedApiClient();
        }
        return AuthenticatedApiClient.instance;
    }

    private api: AxiosInstance;

    private constructor() {
        this.api = axios.create({
            baseURL: 'https://reqres.in/api/',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            },
        })
        this.api.interceptors.request.use((config) => {
            const token = sessionStorage.getItem('accessToken')
            if (token) config.headers.Authorization = `Bearer ${token}`;
            return config;
        })
        this.api.interceptors.response.use(res => res, (error: AxiosError) => Promise.reject(error))
    }


    public async signIn(email: string, password: string): Promise<void> {
        const res = await this.api.post('register', {
            email,
            password,
        })
        if (res.status === 200) {

            sessionStorage.setItem('accessToken', res.data.token);
            sessionStorage.setItem('userId', res.data.id.toString());
        } else {
            throw new Error('Authentication failed');
        }

    }

    public async login(email: string, password: string): Promise<void> {
        const res = await this.api.post('login', {
            email,
            password,
        })
        if (res.status === 200) {
            const token = res.data.token;
            const getLocalToken = sessionStorage.getItem('accessToken');
            if (getLocalToken !== token) {
                throw new Error('Token mismatch');
            }
        } else {
            throw new Error('Authentication failed');
        }
    }

    public getUserId(): number | null {
        const userId = sessionStorage.getItem('userId');
        return userId ? parseInt(userId, 10) : null;
    }

    public async getUser(): Promise<{ id: number; email: string; first_name: string; last_name: string; avatar: string }> {
        const id = this.getUserId();
        if (id === null) {
            throw new Error('User ID not found in session storage');
        }
        const res = await this.api.get(`users/${id}`);
        if (res.status === 200) {
            return res.data.data;
        } else {
            throw new Error('Failed to fetch user');
        }
    }

    public async logout(): Promise<void> {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('userId');
    }


}


export default AuthenticatedApiClient.Getinstance;