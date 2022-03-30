import React, { useState } from 'react';
import './devices.css';

export default function Devices() {
    const [devices, setDevices] = useState([]);

    // get device
    setTimeout(() => {
        fetch(`http://35.201.2.209:8000/devices`)
            .then(response => response.json())
            .then(data => {
                setDevices(data.devices);
            })
            .catch(error => {
                console.log(error)
            });
    }, 5000)

    return (
        <div>
            <div id="device-screen">
                <div className="online-devices text-center">
                    <h2>{devices.length}</h2>
                    <span> DEVICES ONLINE</span>
                </div>
            </div>
            <div className="footer">
                <div className="inside">
                    <button type="button" className="notify-btn">NOTIFY</button>
                    <button type="button" className="logout-btn">LOG OUT</button>
                </div>
            </div>
        </div>
    )
}
