const Testing = () => {
    return (
      <div className="testing-container">
        <h1>Test Chatbot</h1>
        <div className="chat-window">
          <p>Chatbot: Hello! How can I help you today?</p>
          <input type="text" placeholder="Type your message..." />
        </div>
        <button onClick={() => alert("Feedback submitted")}>
          Chatbot not working as intended? Share feedback
        </button>
      </div>
    );
  };
  
  export default Testing;