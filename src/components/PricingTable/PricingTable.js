import React from "react";
import pricingData from "../../data/pricing.json";

const PricingTable = () => {
  // Tworzenie tablicy z danymi cennika

  return (
    <div className="grid items-center justify-center py-10 flex-1">
      <h1>Pricing</h1>
      <table className="w-[800px]">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((item, index) => (
            <tr key={index}>
              <td>{item.plan}</td>
              <td>{item.price}</td>
              <td>
                <ul>
                  {item.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
