import Card from "../ui/Card";
import Category from "../ui/Category";
import ReadMore from "../ui/ReadMore";
import RowImage from "../ui/RowImage";
import SideImage from "../ui/SideImage";

export default function TripItem(props) {
  return (
    <li className="m-[2rem] max-w-7xl">
      <Card>
        <div className="grid grid-cols-10 grid-rows-4">
          <SideImage url={props.url} src={props.photo1} alt={props.title} />
          <div className="text-center p-[1rem] col-span-6 row-span-2">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl text-slate-500 p-[0.5rem]">
                {props.title}
              </h3>
            </a>
            <p className="p-[0.5rem]">
              <ReadMore url={props.url}>{props.description}</ReadMore>
            </p>
            <Category tags={props.tags} />
          </div>
          <RowImage url={props.url} src={props.photo2} alt={props.title} />
          <RowImage url={props.url} src={props.photo3} alt={props.title} />
          <RowImage url={props.url} src={props.photo4} alt={props.title} />
        </div>
      </Card>
    </li>
  );
}
