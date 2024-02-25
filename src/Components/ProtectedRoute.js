import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Sample JSON data (replace this with your actual data)
  const jsonString = '{"key": "value"}';

  try {
    const data = JSON.parse(jsonString);
    console.log(data); // Log parsed data
    // Logic to check if the user is authenticated
    const isAuthenticated = true; // Replace this with your authentication logic

    if (isAuthenticated) {
      // Render the protected content
      return <div>{children}</div>;
    } else {
      // Redirect the user to the login page if not authenticated
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
