import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent,} from "react-pro-sidebar";
import { FaList, FaHistory} from "react-icons/fa";
import { FiHome, FiLogIn, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { TbLayoutSidebarRightCollapse, TbLayoutSidebarRightExpand } from "react-icons/tb";
import turtle from "../../Components/images/turtle.png"
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import "./Home.css";
import "./Category.css";
import "./History.css";
import "./About.css";
import "./Login.css";
import "./Signup.css";
import "./Recycle.css"
import Auth from '../utils/auth';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
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
              <Link to="/">Home</Link>
              </MenuItem>
              {Auth.loggedIn()&&(
                <>
                  <MenuItem active={true} icon={<FaList />}> <Link to="/category">Category</Link></MenuItem>
                  <MenuItem active={true} icon={<FaHistory />}><Link to="/history">History</Link></MenuItem>
                
                  <MenuItem active={true} icon={<RiPencilLine />}> <Link to="/about">About Us</Link></MenuItem>
                  </>
              )}
            
           
            </Menu>
          </SidebarContent>
          <SidebarFooter>


          <Menu iconShape="square">
          <MenuItem active={true} icon={<FiLogIn />}> <Link to="/signup"> Signup</Link></MenuItem>
          <MenuItem active={true} icon={<FiLogIn />}> <Link to="/login"> Login</Link></MenuItem>
            </Menu>

            <Menu  iconShape="square">
              <MenuItem onClick={Auth.logout} active={true} icon={<FiLogOut />}> Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};


export default Header;

