import React from "react";
import {Link, useLocation} from "react-router-dom"
import './Sidebar.css'

const Sidebar = () => {
    const location = useLocation();

    return(
        <div className="sidebar">
            <h2 className="logo">Task Manager</h2>
            <nav>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link>Dashboard</Link>
                    </li>
                    <li className={location.pathname === '/create' ? 'active' : ''}>
                        <Link>Create Task</Link>
                    </li>
                    <li className={location.pathname === '/settings' ? 'active' : ''}>
                        <Link>Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}