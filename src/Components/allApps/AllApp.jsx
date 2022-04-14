import React from "react";
import "./allApps.css";

const AllApp = () => {
  return (
    <div className="apps">
      <div className="allbtn">
        <button className="btn all">All</button>
        <button className="btn">Videos</button>
        <button className="btn">Comics</button>
        <button className="btn">Info Graphics</button>
        <button className="btn">Games</button>
        <button className="btn">Stories</button>
      </div>
    </div>
  );
};

export default AllApp;
