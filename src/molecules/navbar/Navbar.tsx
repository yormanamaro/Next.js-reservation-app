"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import Container from "@modules/container/Container";
import Logo from "@modules/logo/Logo";
import Search from "@modules/search/Search";
import UserMenu from "@modules/userMenu/UserMenu";
import React from "react";

const Navbar = () => (
  <div className="fixed w-full bg-white z-10 shadow-sm">
    <div className="py-4 border-b-[1px]">
      <Container>
        <div
          className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md-gap-0
          "
        >
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
  </div>
);


export default Navbar;
