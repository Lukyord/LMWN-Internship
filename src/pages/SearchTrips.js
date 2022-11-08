import SearchIcon from "@mui/icons-material/Search";
import TripList from "../components/Trips/TripList";

import DummyData from "../db-en.json";

export default function SearchTrips(props) {
  return (
    <div className="flex justify-center content-center h-full pt-[3rem] bg-slate-100">
      <div className="flex-col">
        <form>
          <div className="text-xl p-[1rem] flex items-center focus-within:text-gray-600 justify-center">
            <input
              type="text"
              placeholder={props.placeholder}
              className="border-0 rounded-md rounded-tr-0 rounded-br-0 w-[40rem] p-[1rem] text-black"
            />
            <div className="pl-[36rem] h-4 w-5 absolute mb-5 content-end text-gray-400 pointer-events-none">
              <SearchIcon />
            </div>
          </div>
        </form>
        <div>
          <TripList trips={DummyData} />
        </div>
      </div>
    </div>
  );
}
