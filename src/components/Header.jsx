import React from "react";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header>
      <Navigation
      currentPage={props.currentPage}
      setCurrentPage={props.setCurrentPage}
      />
    </header>
  );
};

export default Header;
