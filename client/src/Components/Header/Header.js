import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent,} from "react-pro-sidebar";
import { FaList, FaHistory} from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { TbLayoutSidebarRightCollapse, TbLayoutSidebarRightExpand } from "react-icons/tb";
import turtle from "../../Components/images/turtle.png"
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import "./Home.css";
import "./Category.css";
import "./History.css";
import "./About.css";
import "./Login.css"
import "./Signup.css"






const Header = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {

    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };



  return (
    <>
      <div id="header">
          {}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {}
              <p>{menuCollapse ?  "🌍DO-GOOD" :  "🌍DO-GOOD"}</p>
              <p>{menuCollapse ?  <img class="self" src={turtle} alt="Self" /> :  <img class="self" src={turtle} alt="Self" />}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {}
              {menuCollapse ? (
                <TbLayoutSidebarRightCollapse/>
              ) : (
                <TbLayoutSidebarRightExpand/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />} >
              <a href="/">Home</a>
              </MenuItem>
              <MenuItem active={true} icon={<FaList />}> <a href="/category">Category</a></MenuItem>
              <MenuItem active={true} icon={<FaHistory />}><a href="/history">History</a></MenuItem>
            
              <MenuItem active={true} icon={<RiPencilLine />}> <a href="/about">About Us</a></MenuItem>
           
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};


export default Header;


