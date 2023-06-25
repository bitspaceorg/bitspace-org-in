"use client";
import bits_pride from "@/libs/assets/images/bitspace_progress.png";

import gradients from "@/libs/sass/colors.module.scss";

import { usernameContext } from "@/libs/contexts/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import Image from "next/image";

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
      className={`font-glb 
      ${
        pathname.match("/(.*)$")![0] === link
          ? "text-teal border-b-2 border-b-teal"
          : "text-white"
      }
      hover:text-teal hover:text-[1.3rem] transition-all ease-in-out
      
      `}
    >
      <span>{name.toUpperCase()}</span>
    </Link>
  );
}

export function Header() {
  "use client";
  const abc = useContext(usernameContext);

  return (
    <header className="fixed z-50 top-0 w-screen h-[10%] shadow-[0px_0px_50px_2px_#000000] bg-black flex items-center justify-between p-5 border-[#ffffff] ">
      <Link href="/">
        <div className="w-16 flex justify-center">
          <Image src={bits_pride} alt="bitspace-pride" width={55} />
        </div>
      </Link>
      <nav className="text-white text-lg font-glb flex flex-row items-center gap-2 md:gap-5 xl:gap-12 ">
        <InputLink name="Home" link="/" />
        <InputLink name="About" link="/About" />
        <InputLink name="Events" link="/Events" />
        <InputLink name="Timeline" link="/Timeline" />
        <InputLink name="FAQ" link="/FAQ" />
        <InputLink name="Socials" link="/Socials" />
        <InputLink name="Team" link="/Team" />
      </nav>
      <div>
        <button className="text-glb text-black font-glb bg-teal px-4 py-2">
          {abc.username !== "" ? "PROFILE" : "LOGIN"}
        </button>
      </div>
    </header>
  );
}
