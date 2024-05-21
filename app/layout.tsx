// app/layout.js
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import "@/styles/nav.css";
import dynamic from 'next/dynamic';

interface RootLayoutProps {
  children: React.ReactNode;
}

const ClientAside = dynamic(() => import('@/components/ClientAside'), { ssr: false });

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