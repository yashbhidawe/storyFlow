import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="px-5 py-2 rounded-full text-[#F5F3F5] bg-transparent hover:bg-[#274690] hover:text-white transition-all duration-300"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
