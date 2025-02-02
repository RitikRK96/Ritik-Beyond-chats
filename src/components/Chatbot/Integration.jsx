import { useNavigate } from "react-router-dom";

const Integration = () => {
  const navigate = useNavigate();

  const handleTestIntegration = () => {
    // Dummy logic to test integration
    const isSuccess = true; // Change to false to simulate failure
    if (isSuccess) {
      navigate("/success");
    } else {
      alert("Integration not detected yet. Please try again later.");
    }
  };

  return (
    <div className="chatbot-container">
      <h1>Chatbot Integration</h1>
      <button onClick={() => alert("Test chatbot functionality")}>Test Chatbot</button>
      <button onClick={() => alert("Show integration instructions")}>
        Integrate on Your Website
      </button>
      <button onClick={handleTestIntegration}>Test Integration</button>
    </div>
  );
};

export default Integration;