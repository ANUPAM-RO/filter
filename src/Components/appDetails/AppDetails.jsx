import React from "react";
import "./appDetails.css";
const AppDetails = ({ Data }) => {
  return (
    <div className="details">
      {Data.map((data, key) => {
        return (
          <div className="main">
            <div className="appDetails">
              <div className="image">
                <img
                  src={data.img}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
              <div className="details-page">
                <h1>{data.name}</h1>
                <div className="desc">
                  <span>{data.descriptions}</span>
                </div>
                <button className="feature">{data.feature1}</button>
                <button className="feature">{data.feature2}</button>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default AppDetails;
