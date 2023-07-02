"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JsxChild } from "typescript";

type NavLinkParams = {
  href: string;
  children: string;
};

function NavLink({ href, children }: NavLinkParams) {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <span
        className={`font-extrabold ${
          pathname.match("/(.*)$")![0] === href ? "text-accent" : "text-black"
        }
        transition-colors ease-in-out hover:text-accent
        `}
      >
        {children}
      </span>
    </Link>
  );
}

export function WHeader() {
  return (
    <header
      id="Wheader"
      className="h-header bg-white fixed z-40 overflow-hidden w-screen flex justify-between items-center px-4 text-lg border-b-4 border-bsprime shadow-bsprime " //shadow-[0px_0px_9px_#000000]
    >
      <div>
        <span className="font-glb text-3xl">:bs</span>
      </div>
      <nav className="flex gap-10">
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/About">ABOUT</NavLink>
        <NavLink href="/Events">EVENTS</NavLink>
        <NavLink href="/Timeline">TIMELINE</NavLink>
        <NavLink href="/FAQ">FAQ</NavLink>
        <NavLink href="/Socials">SOCIALS</NavLink>
        <NavLink href="/Team">TEAM</NavLink>
      </nav>
      <div>
        <button className="bg-accent px-5 py-1 border-2 shadow-xl">
          Login
        </button>
      </div>
    </header>
  );
}
