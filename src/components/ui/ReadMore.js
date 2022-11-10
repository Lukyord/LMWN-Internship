import { useState } from "react";

export default function ReadMore(props) {
  const text = props.children;

  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  function toggleButton() {
    setIsReadMoreShown((prevState) => !prevState);
  }

  return (
    <div>
      {isReadMoreShown ? text + "  " : text.substr(0, 165) + "...  "}
      <button onClick={toggleButton} className="font-semibold text-sky-400">
        {" "}
        {isReadMoreShown ? (
          <text>
            Read Less
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="m-[1rem] px-[2rem] bg-orange-100 rounded hover:bg-orange-200 text-sky-500"
            >
              Go to Link
            </a>
          </text>
        ) : (
          "Read More"
        )}
      </button>
    </div>
  );
}
