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
 * @param {*} param0
 * @returns `JSX.Element`
 *
 */
const InputSelect = ({ options }) => {
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
      {!value && <option value=""> Choose Reason </option>}

      {elements.map((elem) => elem)}
    </select>
  );
};

export default InputSelect;
