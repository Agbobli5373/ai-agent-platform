import { Link, useLocation } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/dashboard">
            <h1 className="text-2xl font-bold text-white">AI Agent Platform</h1>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/dashboard"
              className={`${
                isActive('/dashboard')
                  ? 'text-white font-medium'
                  : 'text-gray-300 hover:text-white'
              } transition-colors`}
            >
              Dashboard
            </Link>
            <Link
              to="/marketplace"
              className={`${
                isActive('/marketplace')
                  ? 'text-white font-medium'
                  : 'text-gray-300 hover:text-white'
              } transition-colors`}
            >
              Marketplace
            </Link>
            <Link
              to="/agent-builder"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Agent
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
