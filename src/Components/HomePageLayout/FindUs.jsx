import React from "react";
import FB from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mt-8 mb-4">Find Us On</h1>
      <div className="join join-vertical w-full">
        <button className="btn btn-outline   join-item justify-start gap-3">
          <span className="bg-base-300 p-2 rounded-full">
            <img src={FB} alt="Facebook" className="w-5 h-5" />
          </span>
          Facebook
        </button>
        <button className="btn btn-outline   join-item justify-start gap-3">
          <span className="bg-base-300 p-2 rounded-full">
            <img src={twitter} alt="Twitter" className="w-5 h-5" />
          </span>
          Twitter
        </button>
        <button className="btn btn-outline   join-item justify-start gap-3">
          <span className="bg-base-300 p-2 rounded-full">
            <img src={instagram} alt="Instagram" className="w-5 h-5" />
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
