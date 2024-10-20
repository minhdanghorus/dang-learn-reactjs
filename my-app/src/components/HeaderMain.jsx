import React from "react";
import { useAuth } from "../contexts/auth-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  //   console.log(user);
  return (
    <div className="p-4 bg-white shadow-md flex justify-center items-center">
      {user ? (
        <div className="flex items-center justify-center gap-x-3">
          <img
            src={user.avatar}
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <span className="text-sm font-medium">
            Welcome back! <strong>{user.fullName}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
      <button
        className="p-2 bg-gray-300 rounded-md ml-auto"
        onClick={() => setUser({})}
      >
        Sign out
      </button>
    </div>
  );
};

export default HeaderMain;
