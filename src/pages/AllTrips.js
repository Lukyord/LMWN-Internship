import TripList from "../components/Trips/TripList";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AllTrips() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/trips`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="h-full w-screen flex justify-center bg-slate-100 content-center pb-[3rem]">
      <div className="flex-col">
        <h1 className="text-center text-8xl font-semibold italic m-[6rem]">
          All Trips
        </h1>
        <TripList trips={data} />
      </div>
    </div>
  );
}
