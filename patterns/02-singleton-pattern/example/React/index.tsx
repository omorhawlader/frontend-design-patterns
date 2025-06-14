import { useEffect, useState } from 'react';
import AuthService from './Api/apiClient';
import { Button } from '../../../../globalComponents/Button';
const SingletonPattern = () => {
    // console.log(AuthService.login('example@gmail.com', 'password'));
    const [user, setUser] = useState<{ id: number; email: string; first_name: string; last_name: string; avatar: string } | null>(null);
    const [resgistered, setRegistered] = useState(false);
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('pistol');

    useEffect(() => {
        const user = sessionStorage.getItem('userId');
        if (user) {
            AuthService.getUser()
                .then((userData) => {
                    setUser(userData);
                    setRegistered(true);
                    setLogin(true);
                })
                .catch((error) => {
                    console.error('Error fetching user:', error);
                });

        }
    }, [])

    return (
        <div>
            SingletonPattern (Use https://reqres.in/ API) You can Refresh after Register/Login to see the changes in User Information.
            {
                user ? (
                    <div>
                        <h2>User Information</h2>
                        <p>ID: {user.id}</p>
                        <p>Email: {user.email}</p>
                        <p>First Name: {user.first_name}</p>
                        <p>Last Name: {user.last_name}</p>
                        <img src={user.avatar} alt="User Avatar" />
                    </div>
                ) : (
                    <p>No user information available.</p>
                )
            }

            {
                resgistered && (
                    <p>User has been registered successfully.</p>
                )
            }

            {
                (!login && !resgistered) && (
                    <div>
                        <h2>Please Register To Login </h2>
                        <h2>Email:</h2>
                        <input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                        <h2>Password:</h2>
                        <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                        <Button variant='secondary' onClick={() => {
                            AuthService.signIn(email, password)
                                .then(() => {
                                    setRegistered(true);
                                    console.log('User registered successfully');
                                })
                                .catch((error) => {
                                    console.error('Error registering user:', error);
                                });
                        }}>Register</Button>
                    </div>
                )
            }

            {
                login && (
                    <p>User has been logged in successfully.</p>
                )
            }

            {
                (!login && resgistered) && (
                    <div>
                        <h2>Login</h2>
                        <h2>Email:</h2>
                        <input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                        <h2>Password:</h2>
                        <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                        <Button variant='secondary' onClick={() => {
                            AuthService.login(email, password)
                                .then(async () => {
                                    setLogin(true);
                                    const user = await AuthService.getUser();
                                    setUser(user);
                                    console.log('User logged in successfully');
                                })
                                .catch((error) => {
                                    console.error('Error logging in user:', error);
                                    alert('Login failed. Please check your credentials.');
                                });
                        }}>Login</Button>
                    </div>
                )
            }

            {
                user && (
                    <Button variant='secondary' onClick={() => {
                        AuthService.logout()
                            .then(() => {
                                setUser(null);
                                setLogin(false);
                                setRegistered(false);
                                console.log('User logged out successfully');
                            })
                            .catch((error) => {
                                console.error('Error logging out user:', error);
                            });
                    }}>Logout</Button>
                )
            }

        </div>
    )
}

export default SingletonPattern