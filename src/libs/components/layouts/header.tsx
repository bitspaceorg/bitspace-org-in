"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface headerProps {
  name: string;
  link: string;
  home?: boolean;
}

function InputLink({ name, link, home = false }: headerProps) {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`text-xl font-glb 
      ${pathname.match("/(.*)$")[0] === link ? "text-teal" : "text-white"}
      hover:text-teal hover:text-2xl transition-all ease-in-out
      `}
    >
      <span>{name.toUpperCase()}</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="fixed z-50 top-0 w-screen shadow-[0px_20px_50px_20px_#000000] bg-black flex items-center justify-between p-5">
      <div>
        <span className="text-white text-3xl text-glb">:bs</span>
      </div>
      <nav className="text-white text-xl font-glb flex items-center gap-12">
        <InputLink name="Home" link="/" />
        <InputLink name="About" link="/About" />
        <InputLink name="Courses" link="/Courses" />
        <InputLink name="Events" link="/Events" />
        <InputLink name="MDS" link="/Mds" />
        <InputLink name="Timeline" link="/Timeline" />
        <InputLink name="Space" link="/Space" />
        <InputLink name="FAQ" link="/FAQ" />
        <InputLink name="Team" link="/Team" />
      </nav>
      <div>
        <button className="text-glb text-black font-glb bg-teal px-4 py-2">
          LOGIN
        </button>
      </div>
    </header>
  );
}
