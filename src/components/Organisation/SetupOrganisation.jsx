import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DummyDataContainer from "../Auth/DummyDataContainer";
import './index.css'

const SetupOrganisation = () => {
  const [formData, setFormData] = useState({ companyName: "", websiteUrl: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.companyName || !formData.websiteUrl || !formData.description) {
      alert("All fields are required!");
      return;
    }

    navigate("/scraping-status");
  };

  return (
    <div className="organisation-container">
      <h1>Setup Organisation</h1>
      <form onSubmit={handleSubmit}>
        <label>Company Name</label>
        <input
          type="text"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        />
<br />
        <label>Website URL</label>
        <input
          type="url"
          placeholder="Website URL"
          value={formData.websiteUrl}
          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
        />

        <label>Description</label>
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        ></textarea>

        <button type="submit">Proceed</button>
      </form>

      {/* Dummy Data Display */}
      <DummyDataContainer
        title="Dummy Organisation Data"
        data={[
          "Company Name: Example Corp",
          "Website URL: https://example.com",
          "Description: A sample organisation for testing.",
        ]}
      />
    </div>
  );
};

export default SetupOrganisation;
