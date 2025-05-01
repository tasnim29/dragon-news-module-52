import React from "react";
import swim from "../../assets/swimming.png";
import ground from "../../assets/playground.png";
import classImg from "../../assets/class.png";

const QZone = () => {
  return (
    <div>
      <div className="bg-base-200 flex flex-col justify-center px-3 py-2">
        <h1 className="font-bold mb-4">Q-Zone</h1>
        <img src={swim} alt="" />
        <img src={ground} alt="" />
        <img src={classImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
