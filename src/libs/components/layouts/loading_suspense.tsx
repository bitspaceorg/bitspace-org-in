import { Suspense } from "react";
import anims from "@/libs/sass/anims.module.scss";

export function Loading() {
  return (
    <div className="w-screen h-[90%] mt-[-10%] flex flex-col justify-center items-center ">
      <div className="px-[6em] py-[2em] overflow-hidden rounded-xl flex flex-col items-center">
        <div className="">
          <span className="font-gla text-3xl text-white translate-x-1/2 translate-y-1/2 left-1/2 top-1/2">
            Loading...
          </span>
        </div>

        <div className="mt-3 h-8 w-52 overflow-hidden rounded-full">
          <p
            className={`font-gla text-teal text-2xl whitespace-nowrap ${anims["anim-inftext"]}`}
          >
            010000100100 100101010100 00100000 01010011 01010000 0100 00010100
            001101000101 01000010 0100 1001 01010100 00100000 01010011 01010000
            01000001 0100 0011 01000101 01000010 01001001 01010100 00100000
            01000101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Lsuspense({ children }: { children: any }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
