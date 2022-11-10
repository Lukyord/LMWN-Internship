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
              <Link key={index} to="/search-trips" className="text-sky-400">
                {tag}
              </Link>
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
            {props.tags[props.tags.length - 1]}
          </a>
        }
      </p>
    </div>
  );
}
