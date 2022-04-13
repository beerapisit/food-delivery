import React from "react";

import { useRouter } from "next/router";

const NavLink = (props) => {
  const router = useRouter();

  const handleClickLink = () => {
    router.push(props.href);
  };

  return (
    <>
      <button className="nav-link" onClick={handleClickLink}>
        {props.children}
      </button>
      <style jsx>{`
        .nav-link {
          padding: 1rem 0.5rem;
          border: none;
          border-radius: 10px;
          background: none;
          font-size: 16px;
          cursor: pointer;
        }
        .nav-link:hover {
          background: #828282;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default NavLink;
