import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import AddLinkIcon from "@mui/icons-material/AddLink";
import "./Sidebar.css";

const SidebarComponent = () => {
  return (
    <>
      <Sidebar className="pro-sidebar">
        <Menu className="sidebar-menu">
          <MenuItem>
            <div className="sidebar-menu-item">
              <AddLinkIcon />
              <p>Add Link</p>
            </div>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;
