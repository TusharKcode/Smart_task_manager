import React, { useState } from "react";
import './CreateTask.css'

const CreateTask = () => {
    const [task, setTask] = useState({
        title: '',
        description: '', 
        dueDate: '',
        priority: 'Medium',
        status: 'Pending'
    });

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Task Added Successfully (static)');
    };

    return(
        <div className="create-task">
            <h2>Create New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={task.title} onChange={handleChange} required/>

                <label>Description</label>
                <textarea name="description" value={task.description} onChange={handleChange} required/>

                <label></label>
                <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required/>

                <label>Priority</label>
                    <select name="priority" value={task.priority} onChange={handleChange}>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                
                <label>Status</label>
                    <select name="status" value={task.status} onChange={handleChange}>
                        <option>Pending</option>
                        <option>Completed</option>
                    </select>
                
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default CreateTask;