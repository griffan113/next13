"use client";

import React from "react";
import NavLink from "./NavLink";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex items-center gap-2 bg-rose-50 rounded-lg">
      <strong className="flex-auto text-purple-400 text-2xl">
        New Nextjs 13!
      </strong>
      <nav className="space-x-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/books">Books</NavLink>
      </nav>
    </header>
  );
};

export default Header;
