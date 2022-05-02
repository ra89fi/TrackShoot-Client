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
            <div>
                <h1>TrackShoot</h1>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {user && (
                    <li>
                        <Link to="/inventory">Manage Items</Link>
                    </li>
                )}
                {user && (
                    <li>
                        <Link to="/newitem">Add Item</Link>
                    </li>
                )}
                {user && (
                    <li>
                        <Link to="/myitems">My Items</Link>
                    </li>
                )}
                {!user && (
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                )}
                <li>
                    {!user && <Link to="/login">Login</Link>}
                    {user && (
                        <button className="btn btn-warning" onClick={logOut}>
                            Log Out
                        </button>
                    )}
                </li>
            </ul>
        </header>
    );
};

export default Header;
