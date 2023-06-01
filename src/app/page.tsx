import { Cover } from "@/libs/components/bitspace/cover";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen min-h-screen mt-10 flex flex-col items-stretch">
      <Welcome />
      <What />
      <Why />
    </main>
  );
}

function Welcome() {
  return (
    <div className="flex items-center h-screen my-6">
      <div className="flex flex-col items-center basis-2/3">
        <span className="text-white text-8xl">
          EVERY BIT IS <br />
          <mark className="text-gray bg-nocl"> OPEN</mark> TO ALL
        </span>
        <span className="font-mono text-teal text-2xl text-right m-2">
          <span className="text-white font-monb opacity-90">
            Srivatsav Auswin,&nbsp;
          </span>
          Media Head
        </span>
      </div>
      <div className="">
        <Cover />
      </div>
    </div>
  );
}

function What() {
  return (
    <section className="flex items-center h-screen my-6">
      <div className="basis-1/2 flex items-center justify-center">
        <span className="text-7xl text-white font-glb">
          What is{" "}
          <mark className="bg-white py-2 px-5 mx-3 rounded-3xl">:Bitspace</mark>{" "}
          ?
        </span>
      </div>
      <div className="basis-1/2 bg-white text-black h-screen px-28 pl-56 flex rounded-3xl rounded-l-full items-center">
        <p className=" font-gla text-4xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="flex items-center h-screen my-6">
      <div className="basis-1/2 flex items-center justify-center rounded-3xl rounded-r-full bg-white h-screen">
        <span className="text-7xl text-black font-glb">
          Why{" "}
          <mark className="bg-black text-white p-2 mx-3 rounded-3xl">
            &nbsp;:Bitspace{" "}
          </mark>{" "}
          ?
        </span>
      </div>
      <div className="basis-1/2 text-black h-screen px-28 pl-56 flex items-center">
        <p className=" font-gla text-3xl text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </p>
      </div>
    </section>
  );
}
