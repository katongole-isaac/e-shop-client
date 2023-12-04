/**
 * Plain Select Input
 *
 */

import { useState } from "react";

/**
 * {
 *   value: label
 * }
 */

/**
 * Plain input Select element
 * @param {object}  options - an object e.g 
 * @returns `JSX.Element`
 *
 */
const InputSelect = ({ options, label,  }) => {
  const [value, setValue] = useState("");
  const elements = [];

  for (let option in options) {
    elements.push(
      <option value={option} key={option}>
        {options[option]}
      </option>
    );
  }

  return (
    <select
      className="p-1 border outline-slate-600"
      defaultValue={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {!value && <option value=""> {label} </option>}

      {elements.map((elem) => elem)}
    </select>
  );
};

export default InputSelect;
