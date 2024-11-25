import React from "react";
import Footer from "@/app/components/footer";
import ThemeSwitcher from "@/app/components/theme-switcher";
import MessagesRequest from "@/app/components/messages-request";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeSwitcher />
        <MessagesRequest>{children}</MessagesRequest>
        <Footer />
      </body>
    </html>
  );
}
