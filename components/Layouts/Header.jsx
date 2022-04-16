import React from "react";
import Image from "next/image";
import Navbar from "../Nav/Navbar";
import SearchInput from "../Input/SearchInput";

const Header = () => {
  const handleSearch = (keysearch) => {
    console.log('search change:', keysearch);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div className="header-logo">
          <Image
            src="/images/conagra_logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Navbar />
        <div>
          <SearchInput onChange={handleSearch} />
        </div>
      </div>
      <style jsx>{`
        .header-logo {
          position: relative;
          width: 80px;
          height: 70px;
        }
      `}</style>
    </>
  );
};

export default Header;
