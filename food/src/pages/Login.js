import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Minimal validation:
    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password");
      return;
    }

    // Simulate login success
    // IMPORTANT: we do NOT rely on app-level auth state here (keeps it simple)
    // Navigate to home page:
    navigate("/", { replace: true });
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1740&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="auth-box" role="region" aria-labelledby="login-heading">
        <h2 id="login-heading">Welcome back 👋</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p style={{ marginTop: 12 }}>
          Don't have an account?{" "}
          <Link to="/register" className="link">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
