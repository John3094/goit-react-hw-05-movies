import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="movieDetails">MovieDetails</NavLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </header>
  );
};
