import React, { useState } from "react";
import "./Dashboardstyles/user.css"; 

const UsersTable = () => {

  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@email.com", role: "User", status: "Active" },
    { id: 2, name: "John", email: "john@email.com", role: "Admin", status: "Inactive" },
    { id: 3, name: "Emily", email: "emily@email.com", role: "User", status: "Active" },
  ]);


  const toggleStatus = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
    ));
  };

  return (
    <div className="users-table-container">
      <h2>User Management</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className={user.status === "Active" ? "active" : "inactive"}>
                {user.status}
              </td>
              <td>
                <button className={user.status === "Active" ? "deactivate-btn" : "activate-btn"} 
                        onClick={() => toggleStatus(user.id)}>
                  {user.status === "Active" ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
