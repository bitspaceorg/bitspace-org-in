import coverImage from "@/libs/assets/svg/coveropt.svg";
import Image from "next/image";

export function Cover() {
  return (
    <section className="flex justify-end h-full overflow-hidden">
      <Image
        src={coverImage}
        alt="cover.svg"
        className="h-[90vh]"
        priority={true}
      />
    </section>
  );
}

export function archivedCover() {
  return (
    <div className="relative w-[1024px] h-[980px] overflow-hidden flex items-center justify-center flex-col md:flex-row">
      <p className="absolute z-0 text-6xl text-gray opacity-50 overflow-hidden break-all w-full text-center font-gla">
        010000100100 100101010100 00100000 01010011 01010000 0100 00010100
        001101000101 01000010 0100 1001 01010100 00100000 01010011 01010000
        01000001 0100 0011 01000101 01000010 01001001 01010100 00100000 01010011
        01010000 01000001 01000011 01000101 01000010 01001001 01010100 00100000
        01010011 01010000 01000001 01000011 01000101 010000100100 100101010100
        00100000 01010011 01010000 0100 00010100 001101000101 01000010 0100 1001
        01010100 00100000 01010011 01010000 01000001 0100 0011 01000101 01000010
        01001001 01010100 00100000 01010011 01010000 01000001 01000011 01000101
        01000010 01001001 01010100 00100000 01010011 01010000 01000001 01000011
        01000101
      </p>
      <span className="absolute z-10 text-white leading-[0.6] text-[512px] text-center break-all font-glb">
        :bit
        <br />
        spa
        <br />
        ce
      </span>
    </div>
  );
}
