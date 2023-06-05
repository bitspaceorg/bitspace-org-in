import colors from "@/libs/sass/colors.module.scss";
import Link from "next/link";

import instagramIcon from "@/libs/assets/svg/insta.svg";
import twitterIcon from "@/libs/assets/svg/twitter-256.svg";
import discordIcon from "@/libs/assets/svg/discord.svg";
import githubIcon from "@/libs/assets/svg/github.svg";
import linkedinIcon from "@/libs/assets/svg/linkedin.svg";
import Image, { StaticImageData } from "next/image";

function SocialCard(props: {
  name: string;
  icon: StaticImageData;
  link: string;
  un: string;
}) {
  return (
    <Link href={props.link} target="_blank">
      <div
        className={
          "flex h-[455.11px] w-[256px] flex-col items-center justify-between px-3 py-6 rounded-3xl hover:border-4 hover:border-white transition-all duration-300 " +
          colors[props.name]
        }
      >
        <div className="m-5">
          <span className={"text-white font-mono text-xl"}>{props.name}</span>
        </div>
        <Image
          src={props.icon}
          alt={props.name}
          width={128}
          className={colors[props.name] + "bg-blend-color"}
        />
        <div className=" my-16">
          <span className="px-7 py-2 rounded-xl font-monb bg-white text-black transition-all ease-in-out ">
            @ {props.un}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Socials() {
  return (
    <main className=" py-10 flex flex-col items-center">
      <div className="m-5">
        <span className="text-white text-4xl font-glb">JOIN US AT</span>
      </div>
      <div className="grid justify-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12 m-5">
        <SocialCard
          name="instagram"
          un="bitspaceorg"
          icon={instagramIcon}
          link=""
        />
        <SocialCard
          name="discord"
          un="Bit Space"
          icon={discordIcon}
          link="https://chat.bitspace.org.in"
        />
        <SocialCard
          name="twitter"
          un="bitspaceorg"
          icon={twitterIcon}
          link="https://twitter.com/bitspaceorg"
        />
        <SocialCard
          name="linkedin"
          un="bitspaceorg"
          icon={linkedinIcon}
          link="https://www.linkedin.com/company/bitspaceorg/mycompany/"
        />
        <SocialCard
          name="github"
          un="bitspaceorg"
          icon={githubIcon}
          link="https://github.com/bitspaceorg"
        />
      </div>
    </main>
  );
}
