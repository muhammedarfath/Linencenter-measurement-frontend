import React from "react";
import { Vortex } from "../components/ui/vortex";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function VortexDemo() {
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/accounts/logout/",
        {},
        { withCredentials: true } 
      );
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="relative w-full mx-auto h-[30rem] overflow-hidden">
      <div className="absolute top-3 right-3 z-50">
        <Button
          variant="bordered"
          className="border rounded-2xl cursor-pointer"
          onClick={handleLogout} 
        >
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
