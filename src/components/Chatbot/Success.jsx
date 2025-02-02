import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <h1>Integration Successful!</h1>
      <button onClick={() => navigate("/admin-panel")}>Explore Admin Panel</button>
      <button onClick={() => navigate("/chatbot")}>Start Talking to Your Chatbot</button>
      <div className="social-buttons">
        <button onClick={() => alert("Shared on Twitter")}>Twitter</button>
        <button onClick={() => alert("Shared on Facebook")}>Facebook</button>
      </div>
    </div>
  );
};

export default Success;