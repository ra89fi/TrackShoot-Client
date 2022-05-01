import React, { useEffect, useRef, useState } from 'react';
import app from '../firebase.init';
import { getAuth } from 'firebase/auth';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile] = useUpdateProfile(auth);
    const [name, setName] = useState('');
    const formRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            e.target.email.value,
            e.target.password.value
        );
    };

    useEffect(() => {
        if (name.length) updateProfile({ displayName: name });
        if (user) {
            formRef.current.reset();
            navigate('/');
        }
    }, [user]);
    return (
        <div className="register">
            <form onSubmit={handleSubmit} ref={formRef}>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value.trim())}
                />
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
                    Register
                </button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
            {error && <p className="text-danger errTxt">{error.message}</p>}
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default Register;
