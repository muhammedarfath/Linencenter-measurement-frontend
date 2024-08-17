import React from "react";
import Banner from "../Banner";
import Cards from "../Cards";
import { VortexDemo } from "../VortexDemo";
import MensModal from "../../components/modal/MensModal";
import Footer from "../Footer";

function Measurement() {
  return (
    <div className="">
      <VortexDemo />
      <Cards/>
      <Footer/>
    </div>
  );
}

export default Measurement;
