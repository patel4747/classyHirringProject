import { useState } from "react";
import { FaCloudUploadAlt, FaWrench } from "react-icons/fa";
import "./FileUplode.css";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Simulated file upload function
  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }
    alert(`File "${selectedFile.name}" uploaded successfully!`);
  };

  // Open ChatGPT on button click
  const handleAIButtonClick = () => {
    window.open("https://chat.openai.com/", "_blank");
  };

  return (
    <div className="upload-container">
      <div className="drop-area">
        <label htmlFor="file-input" className="drop-label">
          Drop your file here
        </label>
        <input
          id="file-input"
          type="file"
          className="file-input"
          onChange={handleFileChange}
        />
      </div>

      <button className="upload-btn" onClick={handleUpload}>
        <FaCloudUploadAlt className="icon" /> Upload File
      </button>

      <span className="or-text">OR</span>

      <button className="ai-btn" onClick={handleAIButtonClick}>
        <FaWrench className="icon" /> Generate with AI
      </button>
    </div>
  );
};

export default FileUpload;
