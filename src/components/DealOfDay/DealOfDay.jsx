import React from "react";
import "./DealOfDay.css";

const DealOfDay = () => {
  return (
    <div className="text-center DealHead">
      <div className="dealTag ">
        <h3>Deal Of Day</h3>
      </div>

      <div div className="dealofdayCart">
        <div className="card">
          <div className="upper">
            <img src="/images/amazon.png" alt="" />
            <p>Amazon</p>
          </div>
          <div className="lower">
            <p className="paragraph">Flat 30% of </p>
            <button className="button">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src="/images/amazon.png" alt="" />
            <p>Amazon</p>
          </div>
          <div className="lower">
            <p className="paragraph">Flat 30% of </p>
            <button className="button">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src="/images/amazon.png" alt="" />
            <p>Amazon</p>
          </div>
          <div className="lower">
            <p className="paragraph">Flat 30% of </p>
            <button className="button">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src="/images/amazon.png" alt="" />
            <p>Amazon</p>
          </div>
          <div className="lower">
            <p className="paragraph">Flat 30% of </p>
            <button className="button">GRAB NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfDay;
