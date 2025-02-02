const DummyDataContainer = ({ title, data }) => {
    return (
      <div className="dummy-container">
        <h2>{title}</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DummyDataContainer;
  