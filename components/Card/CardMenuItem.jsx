import React from "react";

import Image from "next/image";

const CardMenuItem = ({ name, star, price, imageUrl, onClick }) => {
  const handleClickButtonAdd = () => {
    if (onClick && typeof onClick === "function") {
      onClick(name);
    }
  };
  return (
    <>
      <div className="card-menu-wrapper">
        <div className="menu-image">
          <div className="menu-image-wrapper">
            <Image
              src={imageUrl}
              alt="food delivery logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="menu-text">
          <p className="menu-text-mt menu-text__name">{name}</p>

          <div className="box-detail">
            <div>
              <p className="menu-text-mt menu-text__desc">{star}</p>
              <p className="menu-text-mt menu-text__price">${price}</p>
            </div>
            <div className="button-wrap">
              <button
                className="button-add-menu"
                onClick={handleClickButtonAdd}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-menu-wrapper {
          position: relative;
          padding: 1rem 1rem 2rem 1rem;
          border-radius: 20px;
          background: #e5e5e5;
          text-align: center;
          margin-top: 80px;
          margin-bottom: 20px;
          margin-right: 10px;
          margin-left: 10px;
          width: 150px;
        }

        .menu-image-wrapper {
          position: relative;
          width: 120px;
          height: 100px;
          margin: auto;
        }

        .menu-image {
          position: absolute;
          top: -50px;
          left: -30px;
        }

        .menu-text {
          margin-top: 2rem;
        }

        .menu-text-mt {
          margin-top: 5px;
        }

        .menu-text__name {
          font-size: 14px;
          font-weight: bold;
          color: #333;
          width: 50%;
          margin-left: auto;
        }

        .menu-text__desc {
          font-size: 14px;
          color: gray;
        }

        .menu-text__price {
          font-size: 14px;
          color: #000;
        }

        .box-detail {
          display: flex;
          justify-content: space-between;
          width: 75%;
          margin-left: auto;
        }

        .button-wrap {
          display: flex;
          align-items: flex-end;
        }
        .button-add-menu {
          margin-left: 5px;
          border: none;
          background: #000;
          border-radius: 10px;
          width: 30px;
          height: 30px;
          color: white;
        }
      `}</style>
    </>
  );
};

export default CardMenuItem;
