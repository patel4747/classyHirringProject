import React, { useState } from "react";
import "./WhyChoose.css";

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState("trusted");

  const tabContent = {
    trusted:
      "Docutech is trusted by thousands of users worldwide for its secure and efficient digital documentation.",
    soc2: "We are SOC-2 certified, ensuring the highest security and privacy standards.",
    gdpr: "Our platform complies with GDPR & HIPAA regulations, guaranteeing data protection and user privacy.",
    encryption:
      "We provide end-to-end encryption to keep your documents safe and confidential.",
  };

  return (
    <div className="why-choose-section">
      <h2>Why Choose Docutech</h2>
      <div className="why-choose-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "trusted" ? "active" : ""}`}
            onClick={() => setActiveTab("trusted")}
          >
            Trusted by Thousands
          </button>
          <button
            className={`tab ${activeTab === "soc2" ? "active" : ""}`}
            onClick={() => setActiveTab("soc2")}
          >
            SOC-2 Certified
          </button>
          <button
            className={`tab ${activeTab === "gdpr" ? "active" : ""}`}
            onClick={() => setActiveTab("gdpr")}
          >
            GDPR & HIPAA Compliant
          </button>
          <button
            className={`tab ${activeTab === "encryption" ? "active" : ""}`}
            onClick={() => setActiveTab("encryption")}
          >
            End-to-end encryption
          </button>
        </div>
        <div className="content-box">
          <p>{tabContent[activeTab]}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
