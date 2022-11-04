"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      className={clsx([
        { ["font-bold underline text-purple-400"]: isActive },
        "text-lg text-slate-800",
        "hover:underline",
      ])}
      href={href}
    >
      {children}
    </Link>
  );
}
