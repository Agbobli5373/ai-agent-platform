import { ReactNode } from 'react';
import Header from './Header';

interface PageLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

export default function PageLayout({ children, showHeader = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {showHeader && <Header />}
      {children}
    </div>
  );
}
