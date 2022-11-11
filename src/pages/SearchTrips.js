import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TripList from "../components/Trips/TripList";
import useSearchTag from "../components/ui/useSearchTag";
import axios from "axios";

import { useState, useEffect } from "react";

export default function SearchTrips(props) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const { render, tags } = useSearchTag();

  useEffect(() => {
    if (tags.length !== 0) {
      axios
        .get(`http://localhost:9000/trips?q=${tags}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get("http://localhost:9000/trips")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }

    let filteredTags = data.filter((trip) =>
      trip.tags.some((tag) => tag.includes(tags))
    );

    setFilteredData(filteredTags);
  }, [tags]);

  function handleFilter(event) {
    const searchText = event.target.value;
    setWordEntered(searchText);

    let filteredTags = data.filter((trip) =>
      trip.tags.some((tag) => tag.includes(tags))
    );
    const newFilter = filteredTags.filter((value) => {
      return value.title.toLowerCase().includes(wordEntered.toLowerCase());
    });

    if (wordEntered === "") {
      setFilteredData(filteredTags);
    } else {
      setFilteredData(newFilter);
    }
  }

  function clearInput() {
    setFilteredData([]);
    setWordEntered("");
  }

  function submitHandler(event) {
    event.preventDefault();
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
          {filteredData.length === 0 || tags.length === 0 ? (
            <TripList trips={data} />
          ) : (
            <TripList trips={filteredData} />
          )}
        </div>
      </div>
    </div>
  );
}
