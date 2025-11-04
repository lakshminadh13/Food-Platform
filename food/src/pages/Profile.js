import React from "react";
import '../index.css';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>User Profile</h2>
        <div className="profile-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
          />
          <h3>John Doe</h3>
          <p>Email: johndoe@example.com</p>
        </div>
        <button className="logout-btn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
