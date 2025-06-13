# � Singleton Pattern

## 🧩 What is Singleton Pattern?

A design pattern that ensures a class has only one instance and provides a global point of access to it.

---

## ❓ Why do we need it?

Frontend problems it solves:
- Prevents duplicate instances that waste memory
- Provides controlled access to shared resources
- Maintains a single source of truth for global state
- Avoids conflicting operations on the same resource

---

## ⏱️ When should we use it?

Realistic frontend scenarios:
- Managing global application state (theme, user session)
- Centralizing API clients (Axios instances, WebSocket connections)
- Controlling UI singletons (modals, toast notifications)
- Shared utility services (logging, analytics)
- Cache management for performance optimization

---

## 🧪 Step-by-step Explanation

1. **Private Constructor**: The class constructor is made private to prevent direct instantiation
2. **Static Instance**: The class maintains a static reference to its single instance
3. **Access Method**: Provides a static method (usually `getInstance()`) to access the instance
4. **Lazy Initialization**: The instance is created only when first requested
5. **Global Access**: All components use the same instance throughout the app

---

## 💡 Real-world Use Cases (Frontend Focused)

1. Global state management 
2. API client configuration 
3. Toast/notification system
4. Authentication service
5. Analytics tracking service
6. Shopping cart management
7. Application theme manager
8. Browser storage wrapper
9. Feature flag service
10. Websocket connection manager

---

## 🧑‍💻 Code Examples

### In Typescript

```ts
/**
 * The Singleton class defines an `instance` getter, that lets clients access
 * the unique singleton instance.
 */
class Singleton {
    static #instance: Singleton;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static getter that controls access to the singleton instance.
     *
     * This implementation allows you to extend the Singleton class while
     * keeping just one instance of each subclass around.
     */
    public static get instance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }

        return Singleton.#instance;
    }

    /**
     * Finally, any singleton can define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}

    /**
     * The client code.
     */
    function clientCode() {
        const s1 = Singleton.instance;
        const s2 = Singleton.instance;

        if (s1 === s2) {
            console.log(
                'Singleton works, both variables contain the same instance.'
            );
        } else {
            console.log('Singleton failed, variables contain different instances.');
        }
    }

    clientCode();

```

## Real-world Examples

### 🔹 Vanilla JavaScript
```js
class AuthService {
  static instance = null;
  currentUser = null;

  constructor() {
    if (AuthService.instance) {
      return AuthService.instance;
    }
    AuthService.instance = this;
  }

  login(user) {
    this.currentUser = user;
    console.log(`${user} logged in`);
  }

  logout() {
    this.currentUser = null;
    console.log('User logged out');
  }

  static getInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }
}

// Usage
const auth1 = AuthService.getInstance();
const auth2 = AuthService.getInstance();

auth1.login('Omar'); // Omar logged in
console.log(auth1 === auth2); // true

```

### 🔹 React 

```tsx
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
```



