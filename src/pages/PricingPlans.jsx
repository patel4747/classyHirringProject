import React, { useState } from "react";
import "./PricingPlans.css";

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingData = {
    free: {
      title: "FREE",
      price: 0,
      features: ["5 documents a month", "Activity timeline"],
    },
    premium: {
      title: "Premium",
      price: isAnnual ? 100 : 10, // Annual: $100 (discounted), Monthly: $10
      features: [
        "Unlimited documents",
        "Unlimited signees",
        "Activity timeline",
        "Certificate of completion",
      ],
    },
    teams: {
      title: "Teams",
      price: isAnnual ? 80 : 8, // Annual: $80 per user/month, Monthly: $8 per user/month
      minTotal: isAnnual ? 240 : 24, // Minimum total cost
      features: [
        "Everything from Premium",
        "Team management",
        "Transferable contracts",
      ],
    },
  };

  return (
    <div className="pricing-section">
      <h2>Pick your plan. We make this part easy too.</h2>
      <div className="toggle-container">
        <button
          className={!isAnnual ? "toggle-btn active" : "toggle-btn"}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </button>
        <button
          className={isAnnual ? "toggle-btn active" : "toggle-btn"}
          onClick={() => setIsAnnual(true)}
        >
          Annually
        </button>
      </div>

      <div className="pricing-cards">
        {Object.entries(pricingData).map(([key, plan]) => (
          <div
            key={key}
            className={`card ${key === "free" ? "free" : "premium"}`}
          >
            <h3>{plan.title}</h3>
            <p className="price">
              USD <span>{plan.price}</span> /Month
            </p>
            {plan.minTotal && (
              <p className="min-total">
                Minimum total of USD {plan.minTotal}/month
              </p>
            )}
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="select-plan">Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
