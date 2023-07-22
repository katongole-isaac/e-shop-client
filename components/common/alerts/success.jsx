/**
 * Success Alert
 *
 */

const SuccessAlert = ({ message, children, classes, success }) => {
  return (
    <div
      className={`   bg-green-100 min-h-[30px]  rounded my-2 mb-3 p-2 text-green-950 ${classes}`}
    >
      <small className="text-[12px]">{children || message}</small>
    </div>
  );
};

export default SuccessAlert;
