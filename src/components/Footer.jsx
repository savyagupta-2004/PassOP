import React from "react";
import { ReactTyped } from "react-typed";

const Footer = (props) => {
  return (
    <div className="wow  bg-slate-800 flex justify-between items-center px-4 h-14 text-white fixed bottom-0 w-full">
      <div className=" bg-slate-800 flex justify-between items-center px-4 h-14 text-white">
        <div className="text-center flex ">
          <h1>
            <ReactTyped
              className="text-center"
              strings={["I Hope You Have a Nice Day"]}
              typeSpeed={100}
              backSpeed={20}
              loop
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
