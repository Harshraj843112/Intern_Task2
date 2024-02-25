import React from "react";

const Profile = () => {
  // Hardcoded user data
  const userDetails = {
    id: 15,
    username: "kminchelle",
    email: "kminchelle@qq.com",
    firstName: "Jeanne",
    lastName: "Halvorson",
    gender: "female",
    image: "https://robohash.org/Jeanne.png?set=set4",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs",
  };

  return (
    <div className="bg-gray-100 min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white overflow-hidden shadow-xl rounded-lg">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img
            className="h-24 w-24 rounded-full mx-auto sm:mx-0 sm:mr-4 sm:ml-0"
            src={userDetails.image}
            alt="Profile"
          />
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <p className="text-xl font-bold text-gray-800">
              {userDetails.firstName} {userDetails.lastName}
            </p>
            <p className="text-md font-semibold text-gray-600">
              {userDetails.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
