import React from 'react';
import { Link } from 'react-router-dom';

const Another = () => {
    return (
        <div>
            <h1>Another page</h1>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    );
};

export default Another;
