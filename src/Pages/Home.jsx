import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

export function Home() {
  const { userId } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (userId == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />

      <LampContainer>
        <motion.img
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center object-contain tracking-tight text-transparent"
          src="https://linencentre.in/measurement/images/06.png"
          alt="Linen Measurement"
        />
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-slate-300 text-shadow-white"
        >
          Measurement Tool For <br /> Linen Center
        </motion.h1>
      </LampContainer>
      <div className="absolute bottom-8 flex flex-col items-center w-full">
        <Link to="/measurement">
          <button
            className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 border-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Take a Measurement
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
