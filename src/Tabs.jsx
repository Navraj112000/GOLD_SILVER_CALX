import React, { useState } from "react";
import "./App.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`tab-button ${activeTab === tab.label ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.label === activeTab).content}
      </div>
    </div>
  );
};

export default Tabs;
