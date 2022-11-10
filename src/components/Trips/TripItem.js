import Card from "../ui/Card";
import ReadMore from "../ui/ReadMore";

export default function TripItem(props) {
  function allExceptLast(array) {
    let result = [];
    for (let i = 0; i < array.length - 2; i++) {
      result.push(array[i]);
    }
    return result;
  }

  return (
    <li className="m-[2rem] max-w-7xl">
      <Card>
        <div className="grid grid-cols-10 grid-rows-4">
          <div className="w-full overflow-hidden rounded-bl-md rounded-tl-md row-span-4 col-span-4">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <img
                src={props.photo1}
                alt={props.title}
                className="object-fill"
              />
            </a>
          </div>
          <div className="text-center p-[1rem] col-span-6 row-span-2">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl text-slate-500 p-[0.5rem]">
                {props.title}
              </h3>
            </a>
            <p className="p-[0.5rem]">
              <ReadMore url={props.url}>{props.description}</ReadMore>
            </p>
            <div>
              <p>
                Category:{" "}
                {allExceptLast(props.tags).map((tag) => {
                  return (
                    <text>
                      <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400"
                      >
                        {tag}
                      </a>
                      <text>, </text>
                    </text>
                  );
                })}
                {" and "}
                {
                  <a
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400"
                  >
                    {props.tags[3]}
                  </a>
                }
              </p>
            </div>
          </div>
          <div className="object-cover overflow-hidden rounded-3xl rounded-b-[3rem] row-span-2 col-span-2 px-[0.5rem]">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <img
                src={props.photo2}
                alt={props.title}
                className="object-fill"
              />
            </a>
          </div>
          <div className="object-cover overflow-hidden rounded-3xl rounded-b-[3rem] row-span-2 col-span-2 px-[0.5rem]">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <img
                src={props.photo3}
                alt={props.title}
                className="object-fill"
              />
            </a>
          </div>
          <div className="object-cover overflow-hidden rounded-3xl rounded-b-[3rem] row-span-2 col-span-2 px-[0.5rem]">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <img
                src={props.photo4}
                alt={props.title}
                className="object-fill"
              />
            </a>
          </div>
        </div>
      </Card>
    </li>
  );
}
