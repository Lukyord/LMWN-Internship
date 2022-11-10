import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

export default function SearchTag(props) {
  const [tags, setTags] = useState(props.selected);
  function removeTag(indexToRemove) {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  }

  function addTags(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selected([...tags, event.target.value]);
      event.target.value = "";
    }
  }

  console.log(tags);

  return (
    <div className="flex justfy-start flex-wrap w-[40rem] h-[3.5rem] my-[1rem] py-[0.5rem] bg-white border-solid border-slate-600 rounded-md focus-within:border-black shadow-md ">
      <ul className="flex flex-wrap m-1">
        {tags.map((tag, index) => {
          return (
            <li
              key={index}
              className="width-auto h-[2rem] flex items-center justify-center p-4 text-xl list-style-none rounded-lg bg-blue-600 text-white mx-[0.25rem]"
            >
              <span>{tag}</span>
              <i
                className="block h-[1.5rem] width-[1.5rem] items-center justify-center ml-[0.7rem] pb-[1.5rem] text-sm text-black bg-white rounded-full =curser-pointer"
                onClick={() => removeTag(index)}
              >
                <CloseIcon />
              </i>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="Press enter to add tags"
        className="flex-1 border-none h-[3rem] text-lg p-[1rem] focus:outline-none"
        onKeyUp={addTags}
      />
    </div>
  );
}
