import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PersonalPage.css"; // Modern CSS styling

export default function PersonalPage({ token }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  // Fetch user details
  const getUserDetails = async () => {
    try {
      const response = await axios.get("/api/personal/listuser", {
        headers: { Authorization: "Bearer " + token },
      });
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setLoading(false);
    }
  };

  // Handle password update
  const updatePassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/personal/update-password",
        { password: newPassword },
        { headers: { Authorization: "Bearer " + token } }
      );
      setUpdateMessage("Password updated successfully!");
      setNewPassword("");
    } catch (error) {
      console.error("Error updating password:", error);
      setUpdateMessage("Failed to update password. Please try again.");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="personal-page">
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading your details...</p>
        </div>
      ) : (
        <div className="profile-card">
          <h1>Welcome, {user.username}</h1>
          <div className="profile-details">
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
          <div className="password-update-section">
            <h3>Update Password</h3>
            <form onSubmit={updatePassword}>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="password-input"
                required
              />
              <button type="submit" className="update-btn">
                Update Password
              </button>
            </form>
            {updateMessage && <p className="update-message">{updateMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
