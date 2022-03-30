import { faCircleExclamation, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const history = useNavigate();

    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://35.201.2.209:8000/login`, {
                email,
                password
            })
                .then(success => {
                    console.log(success);
                    setToken(success.data)
                    setError(``);
                    setSuccess(`Login successfully.!`);
                    setTimeout(() => {
                        history('/device');
                    }, 1000)
                })
        } catch (error) {
            console.log(error);
            setError(`Invalid Credential.`);
            setSuccess("");
        }

    }

    // token save
    const setToken = (idToken) => {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
    }

    return (
        <div className="" id="login">
            <div className="login-form text-center">
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <h3 className="text-center py-3">Login</h3>
                <form onSubmit={handleSubmit} >
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <input type="email" class="form-control" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" aria-describedby="basic-addon1" required />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faCircleExclamation} /></span>
                        <input type="password" class="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="password" aria-describedby="basic-addon1" required />
                    </div>
                    <input type="submit" value="LOG IN" id="submit-btn" />
                </form>
            </div>
        </div>
    )
}
