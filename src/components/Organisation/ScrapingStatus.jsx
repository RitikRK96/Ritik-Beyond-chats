import { useState } from "react";

const ScrapingStatus = () => {
  const [scrapingData, setScrapingData] = useState([
    { url: "https://example.com/page1", status: "Scraped", chunks: ["Chunk 1", "Chunk 2"] },
    { url: "https://example.com/page2", status: "Pending", chunks: [] },
    { url: "https://example.com/page3", status: "In Progress", chunks: [] },
  ]);

  return (
    <div className="scraping-container">
      <h1>Scraping Status</h1>
      <div className="scraping-list">
        {scrapingData.map((item, index) => (
          <div key={index} className={`scraping-item ${item.status.toLowerCase()}`}>
            <p>
              <strong>{item.url}</strong> - <span className="status">{item.status}</span>
            </p>
            {item.chunks.length > 0 && (
              <ul className="chunks-list">
                {item.chunks.map((chunk, i) => (
                  <li key={i}>{chunk}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      
      <button className="proceed-button" onClick={() => alert("Proceeding to chatbot integration")}>
        Proceed to Chatbot Integration
      </button>
    </div>

    
  );
};

export default ScrapingStatus;
