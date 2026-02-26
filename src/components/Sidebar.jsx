import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import "../styles/components/Sidebar.css";

import { RxDashboard } from "react-icons/rx";
import { LuCalendarRange } from "react-icons/lu";
import { IoAnalyticsOutline, IoFileTrayFull, IoPeople, IoSettings } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { PiCourtBasketball } from "react-icons/pi";

const Sidebar = () => {
  const [openManagement, setOpenManagement] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive ? "link-box active" : "link-box";

  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>Arari Sport</h2>
      </div>

      <nav className="navbar-menu">

        <NavLink to="/admin/dashboard" className={activeLink}>
          <RxDashboard /> Dashboard
        </NavLink>

        <NavLink to="/admin/booking" className={activeLink}>
          <LuCalendarRange /> Booking
        </NavLink>

        {/* MANAGEMENT */}
        <div>
          <div
            className="link-box"
            onClick={() => setOpenManagement(!openManagement)}
          >
            <IoFileTrayFull />
            Management
          </div>

          {openManagement && (
            <div className="submenu">
              <NavLink to="/admin/sport" className={activeLink}>
                <MdOutlineSportsBasketball/> Sport
              </NavLink>

              <NavLink to="/admin/court" className={activeLink}>
                <PiCourtBasketball/> Court
              </NavLink>

              <NavLink to="/admin/operating-hours" className={activeLink}>
                <LuCalendarClock/> Operating Hours
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/admin/customer" className={activeLink}>
          <IoPeople /> Customer
        </NavLink>

        <NavLink to="/admin/analytics" className={activeLink}>
          <IoAnalyticsOutline /> Analytics
        </NavLink>

        <NavLink to="/admin/settings" className={activeLink}>
          <IoSettings /> Settings
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;
