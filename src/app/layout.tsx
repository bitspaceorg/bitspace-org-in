import "./globals.css";

import bitspace_embed from "@/libs/assets/images/bitspace-embed.svg";

import UnderConstruction from "@/libs/components/underConstruction";
import { Header } from "@/libs/components/layouts/header";
import { Footer } from "@/libs/components/layouts/footer";
import { UsernameProvider } from "@/libs/contexts/AuthContext";
import { loginCheck } from "@/libs/utills/login";
import Lsuspense from "@/libs/components/layouts/loading_suspense";

export const metadata = {
  title: "BITSPACE",
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
      "@/libs/assets/images/metaimg1x1.png",
      "@/libs/assets/images/metaimg16x9.png",
      "@/libs/assets/images/metaimg4x3.png",
    ],
    description: "A Spotlight for Open Source Contributions",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const UNDER_CONSTRUCTION: boolean = false;
  return (
    <html lang="en">
      <body className="bg-black subpixel-antialiased">
        <UsernameProvider username={loginCheck()}>
          <Header />
          <div className="absolute top-[10%] flex flex-col items-center justify-center w-screen min-h-[90vh]">
            <Lsuspense>
              {UNDER_CONSTRUCTION ? <UnderConstruction /> : children}{" "}
            </Lsuspense>
          </div>
          <Footer />
        </UsernameProvider>
      </body>
    </html>
  );
}
