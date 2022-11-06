import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <Link to="/">Where we go?</Link>
      <nav>
        <ul>
          <li>
            <Link to="/all-trips">All Trips</Link>
          </li>
          <li>
            <Link to="/search-trips">Search Trips</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
