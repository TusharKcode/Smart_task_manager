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
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li className={location.pathname === '/create' ? 'active' : ''}>
                        <Link to="/create">Create Task</Link>
                    </li>
                    <li className={location.pathname === '/settings' ? 'active' : ''}>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;