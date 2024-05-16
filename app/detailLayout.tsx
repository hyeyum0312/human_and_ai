import RootLayout from './layout';
import MainLayout from './mainLayout';

interface DetailsLayoutProps {
  children: React.ReactNode;
}

export default function DetailsLayout({ children }: DetailsLayoutProps) {
  return (
    <MainLayout>
      {/* Details 페이지에서는 Aside가 필요 없음 */}
      {children}
    </MainLayout>
  );
}