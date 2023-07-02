import { WHeader } from "@/libs/components/layoutComponents";
import "./globals.css";
import "../libs/assets/fonts/Inter/inter.css";

export const metadata = {
  title: "BITSPACE",
  icons: [{ rel: "icon", url: "/app/favicon.ico" }],
  description:
    "Bit Space (@bitspaceorg) : A community started by students from Chennai Institute of Technology. Aims in building community for awareness and positive impact on open source projects.",
  colorScheme: "dark",
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "bitspaceorg",
    "bitspace cit",
    "cit bitspace",
    "open source",
    ":bitspace",
  ],
  openGraph: {
    title: ":bitspace",
    images: [
      "https://cdn.discordapp.com/attachments/1106935324556406866/1122462968311992350/metaimg1x1.png",
      "https://cdn.discordapp.com/attachments/1106935324556406866/1122462952163917954/metaimg4x3.png",
      "https://cdn.discordapp.com/attachments/1106935324556406866/1122462919041503263/metaimg16x9.png",
    ],
    description:
      "A community started by students from Chennai Institute of Technology. Aims in building community for awareness and positive impact on open source projects.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white relative flex flex-col items-stretch font-inter">
        <WHeader />
        <main className="h-main mt-[8vh]">{children}</main>
      </body>
    </html>
  );
}
