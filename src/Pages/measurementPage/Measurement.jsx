import React from "react";
import Banner from "../Banner";
import Cards from "../Cards";
import { VortexDemo } from "../VortexDemo";

function Measurement() {
  return (
    <div className="">
      <VortexDemo />
      <div className="flex flex-col gap-8 items-center justify-center mt-8 md:flex-row md:gap-8 md:items-start">
        <Cards 
          img="https://i.pinimg.com/564x/f8/27/63/f82763e06ab73de2eac3ce8818c73182.jpg" 
          category="women"
        />
        <Cards 
          img="https://i.pinimg.com/564x/c6/27/0f/c6270f503c54ea115769d4ff18432cd6.jpg" 
          category="men"
        />
        <Cards 
          img="https://i.pinimg.com/564x/37/10/af/3710af0a81b850fcea833ac8e71836db.jpg" 
          category="kids"
        />
      </div>
    </div>
  );
}

export default Measurement;
