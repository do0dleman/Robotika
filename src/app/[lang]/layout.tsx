import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Header from "../_components/Header";
import { Locale } from "i18n.config";
import Footer from "../_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Robotika",
  description: "Collection of tasks for Arduino",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={`font-sans ${inter.variable} bg-bgBase text-primary`}>
        <TRPCReactProvider>
          <div className="flex flex-col h-[100dvh] relative">
            <Header params={params} />
            <div className="container xl:max-w-6xl m-auto mt-32 text-xl px-4">
              {children}
            </div>
            <Footer params={params} />
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}