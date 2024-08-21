import React from "react";
import Banner from "../Banner";
import Cards from "../Cards";
import { VortexDemo } from "../VortexDemo";
import MensModal from "../../components/modal/MensModal";
import Footer from "../Footer";
import { Toaster, toast } from "react-hot-toast";

function Measurement() {
  return (
    <div className="">
      <Toaster position="top-right" reverseOrder={false} />
      <VortexDemo />
      <Cards />
      <Footer />
    </div>
  );
}

export default Measurement;
