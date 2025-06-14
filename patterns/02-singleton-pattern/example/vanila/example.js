class AuthService {
    static instance = null;
    currentUser = null;

    constructor() {
        if (AuthService.instance) {
            return AuthService.instance;
        }
        AuthService.instance = this;
    }

    login(user = "Omar") {
        this.currentUser = user;
        console.log(`${user} logged in`);
        return user;
    }

    logout() {
        this.currentUser = null;
        console.log('User logged out');
        return null;
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

// auth1.login('Omar'); // Omar logged in
// console.log(auth1 === auth2); // true