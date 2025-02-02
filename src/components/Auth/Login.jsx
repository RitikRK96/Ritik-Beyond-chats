import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import DummyDataContainer from "./DummyDataContainer";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(formData.email, formData.password)) {
      navigate("/setup-organisation");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>

      {/* Dummy Data Container */}
      <DummyDataContainer 
        title="Dummy Paasword" 
        data={["Email: user@example.com Password: password123"]} 
      />

      <p>
        Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
