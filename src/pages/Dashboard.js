import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard page</h1>
            <ul>
                <li>
                    <Link to="/another">Another</Link>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;
