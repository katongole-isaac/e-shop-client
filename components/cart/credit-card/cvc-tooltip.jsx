/**
 * Credit card CVC tooltip
 *
 */

const ToolTip = () => (
  <div className="absolute hidden text-[12px] max-w-[600px] w-[350px] border z-30 shadow-md p-4 group-hover:block bg-white -right-[22.5rem] -top-8 ">
    <div className="absolute h-5 w-5 -left-2 bg-white top-8  shadow-md rotate-45 "></div>
    <p className="font-medium ">
      The CVV number is the last three digits at the back of your card. For
      American Express cards, the CVV is a 4-digit number on the front of the
      card.
    </p>
  </div>
);

const CvcTooltip = () => {
  return (
    <div className=" group  w-fit relative">
      <span className="link relative text-center inline-block flex-1 text-[12px] hover:text-amber-600 cursor-pointer">
        (what's this?)
      </span>
      <ToolTip />
    </div>
  );
};

export default CvcTooltip;
