/**
 * Plane Input 
 *
 */

const CustomInput = ({ type, error, classes, ...inputProps }) => {
  const toggleError = error
    ? "border-rose-700 ring-rose-200  "
    : " focus:border-slate-600 ring-[#C0EBF1]";

  return (
    <input
      type={type}
      autoComplete="off"
      className={`border p-1 rounded shadow-inner focus:outline-none focus:ring-[3px] ${toggleError} ${classes}`}
      {...inputProps}
    />
  );
};

export default CustomInput;
