import { Link } from "react-router-dom";

export default function Category(props) {
  function allExceptLast(array) {
    let result = [];
    for (let i = 0; i < array.length - 2; i++) {
      result.push(array[i]);
    }
    return result;
  }

  return (
    <div>
      <p>
        Category:{" "}
        {allExceptLast(props.tags).map((tag, index) => {
          return (
            <text>
              <Link
                key={index}
                to="/search-trips"
                className="text-sky-400"
                state={{ tag: [tag] }}
              >
                {tag}
              </Link>
              <text>, </text>
            </text>
          );
        })}
        {" and "}
        {
          <Link
            to="/search-trips"
            className="text-sky-400"
            state={{ tag: [props.tags[props.tags.length - 1]] }}
          >
            {props.tags[props.tags.length - 1]}
          </Link>
        }
      </p>
    </div>
  );
}
