/**
 * General purpose Button
 * 
 */

const Button = ({ onClick, classes, children,  label, ...other }) => {
    
  return (
    <button
      onClick={onClick}
      className={` border p-1 min-w-[100px] rounded  ${classes}`}
      {...other}
    >
      {children || label}
    </button>
  );
};

export default Button