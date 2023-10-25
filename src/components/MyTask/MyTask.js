import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './MyTask.css'; // Assuming you have a CSS file for styling

const MyTask = () => {
  const [myTeamTasks, setMyTeamTasks] = useState([]);

  useEffect(() => {
    fetch('https://taskmanager-ytz6.onrender.com/api/myteamtask')
      .then(response => response.json())
      .then(data => setMyTeamTasks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = myTeamTasks.map(task => {
      if (task._id === taskId) {
        return {
          ...task,
          status: newStatus
        };
      }
      return task;
    });

    setMyTeamTasks(updatedTasks);

    // Send a PATCH request to update the status in the backend
    fetch(`https://taskmanager-ytz6.onrender.com/api/myteamtask/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: newStatus
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Status updated successfully:', data);
      // alert('Status updated successfully')
      window.alert('Status updated successfully')
    })
    .catch(error => console.error('Error updating status:', error));
  }

  return (
    <>
      <Navbar />
      
      <div className="card-container">
        {myTeamTasks.map(task => (
          <div key={task._id} className="card">
            <h2>Task : {task.title}</h2>
            <p>Description : {task.description}</p>
            <p>Assign To : {task.teamMember}</p>
            <div className="btn-group mt-3">
              <button type="button" className="btn btn-info dropdown-toggle text-danger" data-bs-toggle="dropdown" aria-expanded="false">
                Add Status
              </button>
              <ul className="dropdown-menu fw-bold">
                <li><a className="dropdown-item" onClick={() => handleStatusChange(task._id, 'Working')}>Working</a></li>
                <li><a className="dropdown-item" onClick={() => handleStatusChange(task._id, 'Pending')}>Pending</a></li>
                <li><a className="dropdown-item" onClick={() => handleStatusChange(task._id, 'Completed')}>Completed</a></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyTask;
