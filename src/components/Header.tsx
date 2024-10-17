import React from 'react';
import { Calendar, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Calendar className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">Rezerwacje Specjalistów</span>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/" className="hover:underline">Strona główna</Link></li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to={user.role === 'admin' ? '/admin-dashboard' : '/specialist-dashboard'} className="hover:underline">
                    Panel {user.role === 'admin' ? 'Administratora' : 'Specjalisty'}
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="flex items-center hover:underline">
                    <LogOut className="w-4 h-4 mr-1" />
                    Wyloguj
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/" className="hover:underline">Logowanie</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;