import "./globals.css";
import UnderConstruction from "@/libs/components/underConstruction";
import { Header } from "@/libs/components/layouts/header";
import { Footer } from "@/libs/components/layouts/footer";
import { UsernameProvider } from "@/libs/contexts/AuthContext";
import { loginCheck } from "@/libs/utills/login";

export const metadata = {
  title: "BITSPACE",
  description:
    "👋 Bit Space (@bitspaceorg) = 🎓 students from Chennai Institute of Technology building 🚀 community for positive impact with 🌟 open source projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const UNDER_CONSTRUCTION: boolean = false;
  return (
    <html lang="en">
      <body className="bg-black">
        <UsernameProvider username={loginCheck()}>
          <Header />
          <div className="flex flex-col items-center justify-center w-screen h-screen">
            {UNDER_CONSTRUCTION ? <UnderConstruction /> : children}
          </div>
          <Footer />
        </UsernameProvider>
      </body>
    </html>
  );
}
