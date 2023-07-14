/**
 * Input Component
 *
 */

import { useField } from "formik";

const Input = ({ label, content, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  const errorClasses =
    meta.error && meta.touched
      ? "border-2 border-red-700 focus:outline-red-200"
      : "focus:outline-blue-200 border-zinc-400";

  return (
    <div className="mt-1 mb-4 flex flex-col gap-2">
      <label
        htmlFor={props.id || props.name}
        className={`font-semibold after:content-['${content}'] after:ml-0.5 after:text-red-500`}
      >
        {label}
      </label>
      <input
        className={` ${errorClasses}   border py-0.5 px-2 focus:outline-offset-2 rounded transition ease-out duration-700 `}
        type={type}
        {...field}
        {...props}
      />
      {meta.error && meta.touched ? (
        <small className="text-red-900 font-medium"> {meta.error} </small>
      ) : null}
    </div>
  );
};

export default Input;
