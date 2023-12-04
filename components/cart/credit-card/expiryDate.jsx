/**
 * Comprises of a select component to be used
 * in the credit card component
 *
 */

import React from "react";

import SelectDropdown from "@/components/common/selectWithDropdown";

const ExpirationDate = ({
  onSetMonth,
  onSetYear,
  month,
  year,
  months,
  years,
}) => {
  return (
    <React.Fragment>
      <div className="flex gap-2 py-1">
        <SelectDropdown
          dropdownOptions={months}
          value={month}
          onOptionClick={onSetMonth}
        />
        <SelectDropdown
          dropdownOptions={years}
          value={year}
          onOptionClick={onSetYear}
        />
      </div>
    </React.Fragment>
  );
};

export default ExpirationDate;
