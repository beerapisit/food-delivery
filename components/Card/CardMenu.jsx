import React from "react";
import Image from "next/image";

const CardMenu = ({ name, desc, price, imageUrl }) => {
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
          <p className="menu-text-mt menu-text__desc">{desc}</p>
          <p className="menu-text-mt menu-text__price">
            <span className="menu-text__price-unit">$</span> {price}
          </p>
        </div>
        <div className="menu-bottom">
          <button className="menu-button-circle highlight">{`>`}</button>
          <button className="menu-button-circle">{`<`}</button>
        </div>
      </div>
      <style jsx>{`
        .card-menu-wrapper {
          position: relative;
          padding: 1rem 1rem 2rem 1rem;
          border-radius: 20px;
          background: #fff;
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
          left: 0;
          right: 0;
          margin: auto;
        }

        .menu-text {
          margin-top: 2rem;
        }

        .menu-text-mt {
          margin-top: 5px;
        }

        .menu-text__name {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .menu-text__desc {
          font-size: 14px;
          color: gray;
        }

        .menu-text__price {
          font-size: 14px;
          color: #000;
        }

        .menu-text__price-unit {
          font-size: 12px;
          color: red;
        }

        .menu-bottom {
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          bottom: -20px;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .menu-button-circle {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          border: none;
          box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
        }

        .menu-button-circle.highlight {
          background: lightslategray;
          color: white;
        }
      `}</style>
    </>
  );
};

export default CardMenu;
