"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.\
import React from "react"
import HeadingProps from "@modules/heading/interfaces/headingProps.interface";


const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => (
  <div className={center ? "text-center": "text-start"}>
    <div className="text-2x1 font-bold">{title}</div>
    <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
  </div>
);

export default Heading