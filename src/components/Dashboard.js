import React from "react";
import './Dashboard.css';

const Dashboard = () => {
    return(
        <div className="dashboard">
            <h2>Welcome Back!</h2>

            <div className="task-summary">
                <div className="card total">Total tasks<span>10</span></div>
                <div className="card completed">Completed<span>4</span></div>
                <div className="card pending">Pending<span>6</span></div>
            </div>

            <div className="chart-section">
                <h3>Task Progress Overview</h3>
                <div className="chart-placeholder">Chart Placeholder</div>
            </div>

            <div className="recent-tasks">
                <h3>Recent Tasks</h3>
                <ul>
                    <li>Design Homepage</li>
                    <li>Write Dashboard UI</li>
                    <li>Fixed sidebar bug</li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;