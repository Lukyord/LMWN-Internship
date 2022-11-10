import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TripList from "../components/Trips/TripList";

import SearchTag from "../components/ui/SearchTag";

import { useState } from "react";

import DummyData from "../db-en.json";

export default function SearchTrips(props) {
  const selected = ["Cafe", "Island"];

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  function handleFilter(event) {
    const searchText = event.target.value;
    setWordEntered(searchText);

    // const newTrips = DummyData.trips.filter((trip) => trip.)

    const newFilter = DummyData.trips.filter((value) => {
      return value.title.toLowerCase().includes(searchText.toLowerCase());
    });

    if (searchText === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

    console.log(newFilter);
    // const f = newFilter.map((subArray) =>
    //   subArray
    //     .filter((tag) => tag.toLowerCase().includes(enteredText.toLowerCase()))
    //     .map((tag) => {
    //       return tag;
    //     })
    // );
  }

  function clearInput() {
    setFilteredData([]);
    setWordEntered("");
  }

  return (
    <div className="flex justify-center h-full pt-[3rem] bg-slate-100">
      <div className="flex-col">
        <SearchTag selected={selected} />
        <form>
          <div className="text-xl p-[1rem] flex items-center focus-within:text-gray-600 justify-center">
            <input
              type="text"
              placeholder={props.placeholder}
              value={wordEntered}
              className="border-0 rounded-md rounded-tr-0 rounded-br-0 w-[40rem] p-[1rem] text-black shadow-2xl"
              onChange={handleFilter}
            />
            <div className="pl-[36rem] h-4 w-5 absolute mb-5 content-end text-gray-400">
              {wordEntered.length === 0 ? (
                <button className="pointer-events-none">
                  <SearchIcon />
                </button>
              ) : (
                <button className="cursor-pointer" onClick={clearInput}>
                  <CloseIcon />
                </button>
              )}
            </div>
          </div>
        </form>
        {filteredData.length !== 0 && (
          <div className="ml-[22rem] mt-[5px] w-[40rem] h-[200px] bg-white shadow-2xl overflow-hidden overflow-y-auto">
            {/* {filteredData.map((subArray) =>
              subArray
                .filter((tag) =>
                  tag.toLowerCase().includes(enteredText.toLowerCase())
                )
                .map((tag) => {
                  return (
                    <p className="flex items-center text-black h-[50px] pl-[1rem] hover:bg-slate-100">
                      {tag}
                    </p>
                  );
                })
            )} */}
            {filteredData.map((value, key) => {
              return (
                <a
                  href={value.url}
                  target="_blank"
                  className="flex items-center text-black h-[50px] pl-[1rem] hover:bg-slate-100"
                  rel="noreferrer"
                >
                  <p>
                    {value.title.length > 80
                      ? value.title.substr(0, 80) + "..."
                      : value.title}
                  </p>
                </a>
              );
            })}
          </div>
        )}
        <div className="h-screen">
          {filteredData.length === 0 && wordEntered !== 0 ? (
            <TripList trips={DummyData.trips} />
          ) : (
            <TripList trips={filteredData} />
          )}
        </div>
      </div>
    </div>
  );
}
