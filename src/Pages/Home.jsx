"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

export function Home() {
  return (
    <LampContainer>
      <motion.img
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-96 h-96 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium object-contain tracking-tight text-transparent md:text-7xl"
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
        className="text-center text-8xl font-semibold text-slate-300 text-shadow-white"
      >
        Measurement Tool For <br /> Linen Center
      </motion.h1>
    </LampContainer>
  );
}
