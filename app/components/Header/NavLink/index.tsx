"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import React from "react";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      className={`text-lg text-slate-800 ${isActive && "font-bold"}`}
      href={href}
    >
      {children}
    </Link>
  );
}
