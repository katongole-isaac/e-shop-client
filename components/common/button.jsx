/**
 * Button ( yellow and text-black)
 * This button is used on pages like sign, register , forgot-password etc
 *
 */

const Button = ({ onClick, label, classes, disabled, ...other }) => {
  const disabledClasses = disabled
    ? "disabled:bg-amber-100 disabled:text-slate-500 disabled:cursor-not-allowed"
    : "";
  return (
    <button
      className={` ${disabledClasses} ${classes} bg-amber-400 hover:bg-amber-500 transition duration-300 rounded w-full font-semibold p-1 inline-block m-auto  `}
      onClick={onClick}
      disabled={disabled}
      {...other}
    >
      {label}
    </button>
  );
};

export default Button;
