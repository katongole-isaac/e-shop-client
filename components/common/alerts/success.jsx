/**
 * Success Alert
 *
 */

const SuccessAlert = ({ message, children }) => {
  return (
    <div className="bg-green-100 min-h-[30px]  rounded my-2 mb-3 p-2 text-green-950 ">
      <small className="text-[12px]">{children || message}</small>
    </div>
  );
};

export default SuccessAlert;
