import TripItem from "./TripItem";

export default function TripList(props) {
  return (
    <ul>
      {props.trips.map((trip) => (
        <TripItem key={trip.eid} id={trip.eid} />
      ))}
    </ul>
  );
}
