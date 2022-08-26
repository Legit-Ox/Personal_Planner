import React, { useContext, useRef, useState } from "react";
import {
  SDivider,
  Simg,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";
// import { logoSVG } from "../../assets";

import {
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { BsCalendar3Range } from "react-icons/bs";
import { BiAlarmAdd } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

const logout = () => {
  window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
};
const Sidebar = (userDetails) => {
  const user = userDetails.user;
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>

      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label }) => (
        <SLinkContainer key={label} onClick={logout}>
          <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>{user.name}</SThemeLabel>}
        <SLogo>
          <Simg src={user.picture === "undefined" ? " " : user.picture}></Simg>
        </SLogo>
      </STheme>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Dashboard",
    icon: <MdDashboard />,
    to: "/",
    notification: 0,
  },
  {
    label: "Your Tasks",
    icon: <CgNotes />,
    to: "/tasks",
    notification: 3,
  },
  {
    label: "Notes",
    icon: <BsCalendar3Range />,
    to: "/notes",
    notification: 0,
  },
  {
    label: "Reminders",
    icon: <BiAlarmAdd />,
    to: "/reminders",
    notification: 1,
  },
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
    to: "/settings",
    notification: 0,
  },
];

const secondaryLinksArray = [
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];

export default Sidebar;
