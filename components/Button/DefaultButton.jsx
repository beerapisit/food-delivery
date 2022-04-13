import React from "react";

const DefaultButton = (props) => {
  return (
    <>
      <button className={`default-button ${props.theme}`}>{props.children}</button>
      <style jsx>{`
        .default-button {
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          padding: 1rem;
        }

        .default-button.primary {
          background: orange;
        }

        .default-button.green {
          background: green;
        }
      `}</style>
    </>
  );
};

DefaultButton.defaultProps = {
    theme: 'primary'
}

export default DefaultButton;
