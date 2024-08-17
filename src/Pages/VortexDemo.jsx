import React from "react";
import { Vortex } from "../components/ui/vortex";
import { Button } from "@nextui-org/react";
export function VortexDemo() {
  return (
    <div className="w-[calc(100%)] mx-auto h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <img
          className="max-w-xl mt-6"
          src="https://linencentre.in/measurement/images/06.png"
          alt=""
        />
      </Vortex>
    </div>
  );
}
