export default function TripItem(props) {
  <li>
    <div>
      <img src={props.photos[0]} alt={props.title} />
    </div>
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div>
        <p>Category: {props.tags}</p>
      </div>
    </div>
    <div>
      <button>SEE MORE</button>
    </div>
  </li>;
}
