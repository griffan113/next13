import { Roboto } from "@next/font/google";
import clsx from "clsx";

import Header from "./src/components/Header";
import "./globals.css";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(["antialiased", roboto.className])}>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="p-1 min-h-screen space-y-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
