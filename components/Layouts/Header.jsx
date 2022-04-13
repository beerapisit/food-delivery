import React from "react";
import Image from "next/image";
import Navbar from "../Nav/Navbar";
import SearchInput from "../Input/SearchInput";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div>
        <Image src="/images/app_logo.png" alt="logo" width={80} height={80} />
      </div>
      <Navbar />
      <div>
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
