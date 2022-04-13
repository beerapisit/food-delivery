import React from "react";

const CardMenu = () => {
  return (
    <>
      <div className="card-menu-wrapper">
        <div className="menu-image">
          <img src="/images/app_logo.png" alt='menu' />
        </div>
        <div className="menu-text">
          <p>Name</p>
          <p>Description</p>
          <p>Price</p>
        </div>
      </div>
      <style jsx>{`
        .card-menu-wrapper {
          position: relative;
          padding: 1rem;
          border-radius: 20px;
          background: #fff;
          text-align: center;
          margin-top: 80px;
          width: 150px;
        }

        .menu-image img {
          position: absolute;
          width: 100px;
          top: -65px;
          left: 0;
          right: 0;
          margin: auto;
        }

        .menu-text {
            margin-top: 2rem;
        }
      `}</style>
    </>
  );
};

export default CardMenu;
