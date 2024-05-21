'use client'
import { usePathname } from 'next/navigation';

interface DetailsProps {
  params: { id: number };
}

export default function Details({ params }: DetailsProps) {
  const id = params.id;
  const pathname = usePathname();

  return (
    <div>AI페이지입니다. ID: {id}, Pathname: {pathname}</div>
  );
}