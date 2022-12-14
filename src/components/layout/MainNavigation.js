import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header className="flex justify-between w-full h-[8rem] items-center bg-cyan-500 py-2">
      <Link
        to="/"
        className="ml-12 text-6xl font-bold hover:text-white active:text-white"
      >
        Where we go?
      </Link>
      <nav>
        <ul className="flex list-none m-0 p-0 items-baseline text-4xl">
          <li className="ml-[7rem]">
            <Link
              to="/all-trips"
              className="hover:text-white active:text-white"
            >
              All Trips
            </Link>
          </li>
          <li className="ml-[7rem]">
            <Link
              to="/search-trips"
              className="mr-[7rem] hover:text-white active:text-white"
              state={{ tag: ["Cafe"] }}
            >
              Search Trips
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
