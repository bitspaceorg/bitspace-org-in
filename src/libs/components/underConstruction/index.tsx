import Image from "next/image";
import React from "react";

const UnderConstruction = () => {
  return (
    <>
      <div className="text-3xl">WEBSITE UNDER CONSTRUCTION</div>
      <div className="mt-12 text-sm text-left">
        meanwhile, you could follow us on our socials
      </div>
      <div className="flex flex-row mt-4">
        <a className="mx-2" href="https://github.com/bitspaceorg">
          <Image
            width={100}
            height={100}
            src="https://media.discordapp.net/attachments/1089762776387420171/1105733451476373534/git.png"
            alt="GITHUB"
          />
        </a>
        <a className="mx-2" href="https://www.linkedin.com/company/91385462">
          <Image
            width={100}
            height={100}
            src="https://media.discordapp.net/attachments/1089762776387420171/1105733452139073606/linkedin.png?width=400&height=400"
            alt="LINKDIN"
          />
        </a>
        <a className="mx-2" href="https://twitter.com/bitspaceorg">
          <Image
            width={100}
            height={100}
            src="https://media.discordapp.net/attachments/1089762776387420171/1105733451900002344/tweet.png?width=400&height=328"
            alt="TWITTER"
          />
        </a>
        <a className="mx-2" href="https://www.instagram.com/bitspaceorg">
          <Image
            width={100}
            height={100}
            src="https://media.discordapp.net/attachments/1089762776387420171/1105733451686096906/instagram.png?width=400&height=400"
            alt="INSTAGRAM"
          />
        </a>
      </div>
    </>
  );
};

export default UnderConstruction;
