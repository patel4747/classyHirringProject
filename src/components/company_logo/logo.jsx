import React from "react";
import "./logo.css";
import Uc from "./UC.png";
import Iv from "./iv.jpeg";
import ab from "./absa.png";
import pharma from "./pharmaBills.png";
import B2b from "./B2B.jpeg";

function Comp_logo() {
  return (
    <>
      <div className="pera">
        <h1>64.0k businesses and individuals have signed with DocuTech</h1>
      </div>
      <div className="logo">
        <img src={Uc} alt="uc" />
        <img src={Iv} alt="iv" />
        <img src={ab} alt="absa" />
        <img src={pharma} alt="pharmabills" />
        <img src={B2b} alt="b2b" />
      </div>
    </>
  );
}

export default Comp_logo;
