import cover from "@/libs/assets/svg/cover.svg";
import { Cover } from "@/libs/components/bitspace/cover";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen p-10">
      <div className="flex items-stretch">
        <div className="flex items-center justify-around w-screen basis-2/3">
          <span className="text-white text-8xl">
            EVERY BIT IS <br />
            <mark className="text-gray bg-nocl"> OPEN</mark> TO ALL
          </span>
        </div>
        <div className="basis-1/3">
          <Cover />
        </div>
      </div>
      <div></div>
      <div></div>
    </main>
  );
}
