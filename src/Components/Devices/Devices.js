import axios from "axios";
import React, { useEffect, useState } from 'react';
import './devices.css';

export default function Devices() {
    const [devices, setDevices] = useState([]);
    const [notifyData, setNotifyData] = useState({
        name: 'Muhammad Al amin',
        email: 'muhammad.alamindev01@gmail.com',
        repoUrl: 'https://github.com/muhammad-alamin1/meldCX-task',
        message: 'I have finished the task.'
    });
    const [logoutSuccess, setLogoutSuccess] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    // get device
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://35.201.2.209:8000/devices`)
                .then(response => response.json())
                .then(data => {
                    setDevices(data.devices);
                })
                .catch(error => {
                    console.log(error)
                });
        }, 5000);
    }, [devices])

    // logout device
    const logout = () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        setLogoutSuccess(`Logout successful.!`);
    }

    // get token
    const getToken = () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    // notify post data 
    const notifyPostData = async () => {
        const token = getToken();
        const data = { ...notifyData };

        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };

        const response = await axios.post(`http://35.201.2.209:8000/notify`, data, config);
        console.log(response.status);
        if (response.status === 201 || response.status === 200) {
            setSuccess(response.data);
        }
        if (response.status === 400) {
            setError('You send a bad request.!');
        }
        if (response.status === 401) {
            setError('Unauthorized. You do not have permission.!')
        }
    }

    return (
        <div>
            <div id="device-screen">
                <div className="online-devices text-center">
                    <h2>{devices.length}</h2>
                    <span> DEVICES ONLINE</span>
                </div>
            </div>
            <div className="footer">
                {logoutSuccess && <p className="success">{logoutSuccess}</p>}
                {success && <p className="success">{success}</p>}
                {error && <p className="error">{error}</p>}
                <div className="inside">
                    <button type="button" onClick={notifyPostData} className="notify-btn">NOTIFY</button>
                    <button type="button" onClick={logout} className="logout-btn">LOG OUT</button>
                </div>
            </div>
        </div>
    )
}
