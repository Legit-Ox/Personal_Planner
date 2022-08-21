import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";

const Layout = (userDetails, { children }) => {
  const user = userDetails.user;
  return (
    <SLayout>
      <Sidebar user={user} />
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
