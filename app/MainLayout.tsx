import Aside from '@/components/Aside';
import RootLayout from './layout';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
}