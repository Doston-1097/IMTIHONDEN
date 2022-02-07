import LayoutWrapper from "./LayoutWrapper";
import * as React from "react";
import {NavLink} from "react-router-dom";

const Layout = (props) => {

    const children = props.children

  return (
    <LayoutWrapper>

       <div className="container">
               {children}
       </div>

    </LayoutWrapper>
  );
};

export default Layout;
