/**
 * Customized input for credit card component
 * 
 */

import CustomInput from "@/components/common/customInput";

const CreditCardInput = ({
  label,
  error,
  classes,
  inputProps,
  input,
  children,
}) => {
  return (
    <div className="flex gap-2 items-center w-full">
      <div className="w-fit px-1 min-w-[100px] max-w-[125px] text-[13px] font-semibold">
        <label htmlFor="input">{label} </label>
      </div>
      <div className="flex flex-col gap-1">
        <div>
          {input || (
            <CustomInput classes={classes} error={error} {...inputProps} />
          )}
          
        </div>
        {children}
      </div>
    </div>
  );
};

export default CreditCardInput;
