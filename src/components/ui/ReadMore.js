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
        {isReadMoreShown ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
