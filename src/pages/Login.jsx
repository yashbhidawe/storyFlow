import React from "react";
import { Login as LoginComponent } from "../components"; // Use PascalCase for components

function Login() {
  return (
    <div className="py-8 bg-[#1B264F]">
      {" "}
      {/* Set to dark background */}
      <LoginComponent />
    </div>
  );
}

export default Login;
