/* React */
import React from "react";

const Dashboard = (props) => {
  
  return (
    <div className="text-center">
      <h1>Dashboard</h1>
      <h3>{"Welcome " + props.name}</h3>
    </div>
  );
};

export default Dashboard;
