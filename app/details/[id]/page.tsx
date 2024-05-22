'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDevice } from '@/hooks/useDevice';
import Nav from '@/components/Nav';

interface DetailsProps {
  params: { id: number };
}

interface DetailLayoutProps {
  children: React.ReactNode;
}

export default function Details({ children }: Readonly<DetailLayoutProps>) {
  const pathname = usePathname();
  const [detailId, setDetailId] = useState<string | null>(null);
  const { isDesktop } = useDevice();

  useEffect(() => {
    const parts = pathname?.split('/');
    const id = parts?.length ? parts[parts.length - 1] : null;
    setDetailId(id);
  }, [pathname]);


  if (!isDesktop) {
    return <div>Mobile Not Supported</div>;
  }

  if (!detailId) {
    return <div>Loading...</div>;
  }

  return (
    <html lang="en">
      <body>
        <Nav />
        <div>Detail ID: {detailId}</div>;
      </body>
    </html>
  );
}