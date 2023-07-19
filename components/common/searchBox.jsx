/**
 * SearchBox Component
 *
 */

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div
      className={` ${
        isFocused ? " outline-2 outline-double outline-amber-600 " : ""
      } flex w-1/2 rounded-md overflow-hidden transition duration-500 ease-in-out my-1 `}
    >
      <input
        type="text"
        className="border rounded-l px-2  w-full outline-none "
        placeholder="search..."
        value={search}
        onChange={(e) => handleChange(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="w-10 hover:bg-amber-600 bg-amber-400 flex items-center justify-center rounded-r transition duration-500">
        <AiOutlineSearch
          size={28}
          onClick={() => onSearch(search)}
          className="cursor-pointer "
        />
      </div>
    </div>
  );
};

export default SearchBox;
