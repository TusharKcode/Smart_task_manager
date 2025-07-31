import React from "react";
import './ViewTasks.css';

const dummyTasks = [
    {
        id: 1,
        title: 'Complete Assignment',
        description: 'Finish Maths assignment by Monday',
        dueDate: '2025-08-05',
        priority: 'High',
        status: 'Pending'
    },
    {
        id: 1,
        title: 'Complete Assignment',
        description: 'Finish Maths assignment by Monday',
        dueDate: '2025-08-05',
        priority: 'High',
        status: 'Pending'
    }
];

const ViewTasks = () => {
    return(
        <div className="view-tasks">
            <h2>All Tasks</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {dummyTasks.map((task) => (
                        <tr key = {task.id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.dueDate}</td>
                        <td>{task.priority}</td>
                        <td>{task.status}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewTasks;