import { Link, NavLink, useLocation } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
  const location = useLocation();
  const isCharacterRoute = location.pathname.match(/^\/characters\/\d+$/);

  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive || isCharacterRoute ? '#9F0013' : 'inherit',
              })}
              to="/"
            >
              Characters
            </NavLink>
          </li>
          |
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#9F0013' : 'inherit',
              })}
              to="/comics"
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
