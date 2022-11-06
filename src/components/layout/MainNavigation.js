import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header className="flex justify-between w-full h-[5rem] items-center bg-cyan-500 py-2">
      <Link
        to="/"
        className="ml-12 text-4xl font-bold hover:text-white active:text-white focus:text-white"
      >
        Where we go?
      </Link>
      <nav>
        <ul className="flex list-none m-0 p-0 items-baseline">
          <li className="ml-12">
            <Link
              to="/all-trips"
              className="hover:text-white active:text-white focus:text-white"
            >
              All Trips
            </Link>
          </li>
          <li className="ml-12">
            <Link
              to="/search-trips"
              className="mr-12 hover:text-white active:text-white focus:text-white"
            >
              Search Trips
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
