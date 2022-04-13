import React from "react";

import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/menu">Menu</NavLink>
      <NavLink href="/service">Service</NavLink>
      <NavLink href="/shop">Shop</NavLink>
    </div>
  );
};

export default Navbar;
