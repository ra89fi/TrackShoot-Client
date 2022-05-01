import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import app from '../firebase.init';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => signOut(auth);
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {!user && (
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                )}
                <li>
                    {!user && <Link to="/login">Login</Link>}
                    {user && (
                        <button className="btn btn-primary" onClick={logOut}>
                            Log Out
                        </button>
                    )}
                </li>
            </ul>
        </header>
    );
};

export default Header;
