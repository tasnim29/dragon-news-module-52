import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Log in with</h1>
      <div className="space-y-4">
        <button className="btn btn-outline btn-secondary w-full ">
          <span>
            <FcGoogle size={24} />
          </span>
          Log in with Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <span>
            <FaGithub size={24} />
          </span>
          Log in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
