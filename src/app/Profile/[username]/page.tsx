import Image from "next/image";

function Profilepic({ url }: { url: string }) {
  return (
    <section>
      <div className="rounded-full border-4 border-accent overflow-hidden flex justify-center items-center shadow-accent shadow-lg">
        <Image src={url} alt="profile" width={200} height={200} />
      </div>
    </section>
  );
}

function Ptitle({
  Hkey,
  value,
  cN,
}: {
  Hkey: string;
  value: string;
  cN: string;
}) {
  return (
    <div
      className={
        "grid grid-cols-2 grid-rows-1 bg-accent py-5 px-3 place-items-center" +
        " " +
        cN
      }
    >
      <span className="text-xl text-black">{Hkey}</span>
      <span className="text-xl bg-black text-accent px-10 py-4 rounded-3xl">
        {value}
      </span>
    </div>
  );
}

export default function Page({ params }: { params: { username: string } }) {
  return (
    <main className="grid grid-cols-2 grid-rows-3 gap-x-10">
      <div className="flex flex-col items-center justify-center text-accent text-2xl row-span-full">
        <span>{params.username}</span>
        <Profilepic url="https://avatars.githubusercontent.com/u/128706614?s=200&v=4" />
      </div>
      <Ptitle
        cN="row-start-1 col-start-2"
        Hkey={"Name"}
        value={params.username}
      />
      <Ptitle
        cN="row-start-2 col-start-2"
        Hkey={"Name"}
        value={params.username}
      />
      <Ptitle
        cN="row-start-3 col-start-2"
        Hkey={"Name"}
        value={params.username}
      />
      <Ptitle
        cN="row-start-4 col-start-2"
        Hkey={"Name"}
        value={params.username}
      />
    </main>
  );
}
