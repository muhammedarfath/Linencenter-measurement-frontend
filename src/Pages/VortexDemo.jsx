import React from "react";
import { Vortex } from "../components/ui/vortex";
import { Button } from "@nextui-org/react";

export function VortexDemo() {
  return (
    <div className="relative w-full mx-auto h-[30rem] overflow-hidden">
      <div className="absolute top-3 right-3 z-10">
        <Button variant="bordered" className="border rounded-2xl">
          Logout
        </Button>
      </div>

      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <img
          className="max-w-xl mt-6"
          src="https://linencentre.in/measurement/images/06.png"
          alt="Measurement Image"
        />
      </Vortex>
    </div>
  );
}
