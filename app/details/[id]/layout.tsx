// src/app/detail/layout.tsx
import Nav from "@/components/Nav";
import "@/styles/globals.scss";
import "@/styles/scss/ui/_layout.scss"

interface DetailLayoutProps {
  children: React.ReactNode;
}

export default function DetailLayout({ children }: Readonly<DetailLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}