import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Header from "./_components/Header";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Robotika",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="lv">
            <body className={`font-sans ${inter.variable} bg-bgBase text-primary px-4`}>
                <TRPCReactProvider>
                    <Header />
                    <div className="container xl:max-w-6xl m-auto mt-4 text-xl">
                        {children}
                    </div>
                </TRPCReactProvider>
            </body>
        </html>
    );
}
