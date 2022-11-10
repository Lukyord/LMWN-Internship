import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TripList from "../components/Trips/TripList";
import useSearchTag from "../components/ui/useSearchTag";

import { useState, useEffect } from "react";

import DummyData from "../db-en.json";

export default function SearchTrips(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const { render, tags } = useSearchTag();

  useEffect(() => {
    let filteredTags = DummyData.trips.filter((trip) =>
      trip.tags.some((tag) => tag.includes(tags))
    );
    setFilteredData(filteredTags);
  }, [tags]);

  function handleFilter(event) {
    const searchText = event.target.value;
    setWordEntered(searchText);

    let filteredTags = DummyData.trips.filter((trip) =>
      trip.tags.some((tag) => tag.includes(tags.toString()))
    );
    const newFilter = filteredTags.filter((value) => {
      return value.title.toLowerCase().includes(searchText.toLowerCase());
    });

    if (searchText === "") {
      setFilteredData(filteredTags);
    } else {
      setFilteredData(newFilter);
    }

    console.log(filteredTags);
    console.log(tags.toString());
    console.log(newFilter);
  }

  function clearInput() {
    setFilteredData([]);
    setWordEntered("");
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(tags);
  }

  return (
    <div className="flex justify-center h-full min-h-screen pt-[3rem] bg-slate-100">
      <div className="flex-col">
        {render}
        <form onSubmit={submitHandler}>
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
        {filteredData.length !== 0 && wordEntered.length !== 0 && (
          <div className="ml-[22rem] mt-[5px] w-[40rem] h-[200px] bg-white shadow-2xl overflow-hidden overflow-y-auto">
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
        <div>
          {filteredData.length === 0 ? (
            <TripList trips={DummyData.trips} />
          ) : (
            <TripList trips={filteredData} />
          )}
        </div>
      </div>
    </div>
  );
}
