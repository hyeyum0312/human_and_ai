import Aside from "@/components/Aside";
import Nav from "@/components/Nav";

import "@/styles/globals.css";
import "@/styles/nav.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Aside />
        {children}
      </body>
    </html>
  );
}

interface MainLayoutProps {
  children: React.ReactNode;
}
