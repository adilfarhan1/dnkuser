import React from 'react'
import dnkLogo from "../../../assets/logo/dnklogo.svg";
import { Outlet, useLocation, useNavigate  } from 'react-router-dom';

export const DashboardLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#040406] flex  items-center justify-between h-15  ">
        <div className="left-block flex container justify-start max-w-[1240px] mx-auto px-4">
          <img
            src={dnkLogo}
            alt="DNK Logo"
            className="site-logo h-[60px] md:h-[70px]"
          />
        </div>
      </div>
      <div className="flex sideBarDashboard">
        <div className="bg-[#1C1D22] sticky" style={{ height: "100vh" }}>
          <div className="sidebar block">
            <button
              onClick={() => navigate("/dashboard")}
              className={`${
                location.pathname == "/dashboard" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/dashboard/team")}
              className={`${
                location.pathname == "/dashboard/team" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              All Team
            </button>
            <button
              onClick={() => navigate("/dashboard/addProject")}
              className={`${
                location.pathname == "/dashboard/addProject" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Add Project
            </button>
            <button
              onClick={() => navigate("/dashboard/addTeam")}
              className={`${
                location.pathname == "/dashboard/addTeam" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Add Team
            </button>
          </div>
        </div>
        <div className="container justify-start max-w-[1240px] mx-auto px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout