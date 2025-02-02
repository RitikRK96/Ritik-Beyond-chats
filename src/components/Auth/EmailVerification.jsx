import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "123456") {
      navigate("/setup-organisation");
    } else {
      alert("Invalid verification code");
    }
  };

  return (
    <div className="auth-container">
      <h1>Email Verification</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default EmailVerification;
