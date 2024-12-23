import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../FirebaseConfig'; // Firestore db instance
import './Admin.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users')); // Fetch users from 'users' collection
      const usersList = querySnapshot.docs.map((doc) => doc.data()); // Extract user data
      setUsers(usersList); // Set users state
    };

    fetchUsers(); // Call the fetchUsers function when the component mounts
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Registered Users</h2>
      {users.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
