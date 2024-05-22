// src/app/layout.tsx
import ClientAside from "@/components/ClientAside";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import "@/styles/nav.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <ClientAside />
        <main>{children}</main>
      </body>
    </html>
  );
}