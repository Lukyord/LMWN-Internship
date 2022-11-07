import Card from "../ui/Card";
import ReadMore from "../ui/ReadMore";

export default function TripItem(props) {
  return (
    <li className="m-[1rem] max-w-2xl">
      <Card>
        <div className="w-full h-[20rem] overflow-hidden rounded-tr-md rounded-tl-md">
          <img
            src={props.photo1}
            alt={props.title}
            className="w-full object-cover"
          />
        </div>
        <div className="text-center p-[1rem]">
          <h3 className="text-xl text-slate-500">{props.title}</h3>
          <p>
            <ReadMore>{props.description}</ReadMore>
          </p>
          <div>
            <p>Category: {props.tags}</p>
          </div>
        </div>
      </Card>
    </li>
  );
}
