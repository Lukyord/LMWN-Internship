import TripItem from "./TripItem";

export default function TripList(props) {
  return (
    <ul>
      {props.trips.map((trip) => (
        <TripItem
          key={trip.eid}
          id={trip.eid}
          title={trip.title}
          photo1={trip.photos[0]}
          description={trip.description}
          // tags={trip.tags}
        />
      ))}
    </ul>
  );
}
