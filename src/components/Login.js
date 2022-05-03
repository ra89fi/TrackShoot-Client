import React, { useEffect, useRef } from 'react';
import {
    useAuthState,
    useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

const Login = () => {
    const [signInWithEmailAndPassword, _, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            e.target.email.value,
            e.target.password.value
        );
    };

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            formRef?.current.reset();
            navigate(from, { replace: true });
        }
    }, [user]);
    return (
        <div>
            <div style={{ width: '400px', margin: '60px auto' }}>
                <form
                    onSubmit={handleSubmit}
                    ref={formRef}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '200px',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
                <p>
                    Do not have an account? <Link to="/register">Register</Link>
                </p>
                {error && <p className="text-danger errTxt">{error.message}</p>}
                {loading && <p>Loading...</p>}
            </div>
            <footer
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px 0',
                    backgroundColor: '#1a1a1a',
                    textAlign: 'center',
                    color: '#eee',
                }}
            >
                Copyright &copy;2022
            </footer>
        </div>
    );
};

export default Login;
