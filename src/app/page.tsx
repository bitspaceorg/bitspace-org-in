import Image from "next/image";
import cover from "@/libs/assets/graphics/cover.svg";
import { JsxElement } from "typescript";

function Landing() {
  return (
    <div
      className="flex md:h-main flex-col md:flex-row md:items-stretch  w-screen"
      id="landing"
    >
      <div className="basis-2/3 flex flex-col  items-center justify-center  bg-opacity-40">
        <h1 className="font-extrabold text-7xl text-center">
          EVERY BIT IS
          <br /> <mark className="bg-nocl text-accent">OPEN</mark> TO ALL
        </h1>
      </div>
      <div className="basis-1/3 coverImage w-full border-l-bsprime border-l-4 border-b-4"></div>
    </div>
  );
}

function BsCircle() {
  return (
    <div className="bg-white rounded-full border-2 h-36 w-36 flex justify-center items-center absolute bottom-0 translate-l-1/2 translate-y-1/2 shadow-lg">
      <span className="text-4xl font-bold">BS</span>
    </div>
  );
}

function About() {
  const Bullet = (props: { name: string; color: string }) => {
    return (
      <div className="flex justify-center items-center gap-3 text-sm">
        <div className={`bg-${props.color} w-4 h-4 rounded-full`}></div>
        <span className="font-inter font-bold">{props.name}</span>
      </div>
    );
  };

  const Markgif = ({ children }: { children: string }) => {
    return <mark className="bg-nocl text-lpurple">{children}</mark>;
  };

  return (
    <>
      <section className="m-16 flex flex-col items-center">
        <div className="px-10 py-32 bg-accent border-2 relative flex flex-col items-center">
          <article className="text-6xl font-inter font-bold text-center">
            Bitspace is an organisation fostering <Markgif>innovation</Markgif>{" "}
            and providing a platform for young coders to showcase their{" "}
            <Markgif>skills</Markgif> through <Markgif>open-source</Markgif>{" "}
            projects
          </article>
          <BsCircle />
        </div>
        <div className="my-2 flex justify-between w-full text-xs">
          <div className="flex gap-12 lg:gap-20">
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red w-4 h-4 rounded-full"></div>
              <span className="font-inter font-bold">FRONTEND</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-blue w-4 h-4 rounded-full"></div>
              <span className="font-inter font-bold">BACKEND</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-accent w-4 h-4 rounded-full"></div>
              <span className="font-inter font-bold">DEVOPS</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-green w-4 h-4 rounded-full"></div>
              <span className="font-inter font-bold">DBMS</span>
            </div>
          </div>
          <div className="flex items-center gap-12 lg:gap-20">
            <div className="flex justify-center items-center gap-3">
              <div className="bg-green w-4 h-4 rounded-full"></div>
              <span className="font-inter font-bold">OPEN SOURCE</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-accent w-4 h-4 rounded-full"></div>
              <span className="font-inter font-bold">UI/UX</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-blue w-4 h-4 rounded-full"></div>
              <span className="font-inter font-bold">CLOUD</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red w-4 h-4 rounded-full"></div>
              <span className="font-inter font-bold">VIM</span>
            </div>
          </div>
        </div>
      </section>
      <section className="m-16 flex flex-col items-center">
        <div className="px-10 py-32 bg-white flex flex-col items-center">
          <article className="text-4xl font-inter font-bold text-center">
            This organization is committed to promoting the spirit of open
            collaboration and knowledge sharing, and encourages the development
            of cutting-edge technology solutions that can benefit the wider
            community.
          </article>
        </div>
      </section>
    </>
  );
}

export default function Page() {
  return (
    <div>
      <Landing />
      <About />
    </div>
  );
}
