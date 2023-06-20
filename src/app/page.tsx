import coverImage from "@/libs/assets/svg/coveropt.svg";

import Image from "next/image";

function Screendiv({ children }: { children: any }) {
  return <div className="min-h-[90vh] my-3 w-screen">{children}</div>;
}

export default function Home() {
  return (
    <main className="w-screen min-h-[90vh] flex flex-col items-stretch">
      <Screendiv>
        <Welcome />
      </Screendiv>
      <Screendiv>
        <What />
      </Screendiv>
      <Screendiv>
        <Why />
      </Screendiv>
    </main>
  );
}

function Welcome() {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center basis-2/3">
        <h1 className="text-3xl my-4">:bitspace</h1>
        <span className="text-white text-5xl lg:text-6xl xl:text-8xl">
          EVERY BIT IS <br />
          <mark className="text-gray bg-nocl"> OPEN</mark> TO ALL
        </span>
      </div>
      <div className="basis-1/3 h-[90vh] self-stretch">
        <Image
          src={coverImage}
          alt="cover.svg"
          priority={true}
          className="h-[90vh]"
        />
      </div>
    </div>
  );
}

function What() {
  return (
    <section className="flex items-center h-screen">
      <div className="basis-1/2 flex items-center justify-center">
        <span className="text-6xl text-white font-glb">
          What is{" "}
          <mark className="bg-white py-2 px-5 mx-3 rounded-3xl">:Bitspace</mark>{" "}
          ?
        </span>
      </div>
      <div className="basis-1/2 bg-white text-black h-full pl-24 pr-16 flex rounded-3xl rounded-l-full items-center">
        <p className=" font-gla text-xl 2xl:text-2xl text-center leading-relaxed">
          <mark className="bg-black text-white font-glb mx-1 px-3 py-1 rounded-xl">
            :bitspace
          </mark>
          is a dynamic and innovative organization that provides a platform for
          young and talented coders to showcase their skills by creating and
          contributing to open-source projects. The organization is committed to
          promoting the spirit of open collaboration and knowledge sharing, and
          encourages the development of cutting-edge technology solutions that
          can benefit the wider community.
        </p>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="flex items-center h-screen">
      <div className="basis-1/2 flex items-center justify-center rounded-3xl rounded-r-full bg-white h-full">
        <span className="text-6xl text-black font-glb">
          Why{" "}
          <mark className="bg-black text-white p-2 mx-3 rounded-3xl">
            &nbsp;:Bitspace{" "}
          </mark>{" "}
          ?
        </span>
      </div>
      <div className="basis-1/2 text-black h-screen  pl-20 pr-14 flex flex-col justify-center items-center">
        <p className=" font-gla text-lg 2xl:text-2xl text-white text-center my-2">
          Led by a team of young and passionate individuals,{" "}
          <span className="font-glb mx-1 px-3 py-1 rounded-xl cursor-pointer hover:text-black leading-loose hover:bg-white transition-all ease-in-out">
            :bitspace
          </span>{" "}
          is committed to fostering a culture of innovation and excellence. The
          organization has a proven track record of delivering high-quality
          projects and initiatives, and has earned a reputation for its
          commitment to quality, transparency, and accountability.
        </p>
        <p className=" font-gla text-lg 2xl:text-2xl text-white text-center my-2">
          Whether you are a seasoned developer or just starting out,
          <span className="font-glb mx-1 px-3 py-1 rounded-xl cursor-pointer hover:text-black leading-loose hover:bg-white transition-all ease-in-out">
            :bitspace
          </span>
          offers a wealth of opportunities for learning, collaboration, and
          growth. Join us today and become part of a dynamic and supportive
          community of like-minded individuals who are passionate about coding
          and technology.
        </p>
      </div>
    </section>
  );
}
