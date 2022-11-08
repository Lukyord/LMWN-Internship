import TripItem from "./TripItem";

export default function TripList(props) {
  return (
    <ul>
      {props.trips.trips.map((trip) => (
        <TripItem
          key={trip.eid}
          id={trip.eid}
          title={trip.title}
          photo1={trip.photos[0]}
          photo2={trip.photos[1]}
          photo3={trip.photos[2]}
          photo4={trip.photos[3]}
          description={trip.description}
          url={trip.url}
          tags={trip.tags}
        />
      ))}
    </ul>
  );
}
