"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import React from "react"
import Image from "next/image";

const Logo = () => (
	<Image className="hidden md:block cursor-pointer" alt="Logo" height="100" width="100" src="/images/logo.png" />
);

export default Logo
