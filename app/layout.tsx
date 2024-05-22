// src/app/layout.tsx
import Aside from "@/components/Aside";
import Nav from "@/components/Nav";


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Aside />
        <main>{children}</main>
      </body>
    </html>
  );
}