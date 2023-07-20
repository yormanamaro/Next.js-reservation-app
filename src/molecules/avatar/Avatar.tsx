"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import React from"react"

import Image from "next/image";

const Avatar = () => (
  <Image
    className="rounded-full"
    height="30"
    width="30"
    alt="Avatar"
    src="/images/icons_user.png"
  />
);


export default Avatar