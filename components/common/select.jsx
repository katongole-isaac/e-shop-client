/**
 * Select Input
 *
 */

import React, { useEffect, useRef, useState } from "react";

const Select = ({ list, search, onSetSearch, form }) => {
  const [showDataList, SetShowDataList] = useState(false);

  const divRef = useRef();
  const inputRef = useRef();

  const handleChange = ({ target }) => {
    onSetSearch(target.value.toLowerCase().trim());
  };

  const checkClick = (e) => {
    // if u click outside the div
    // and not inisde the input
    if (
      !divRef.current?.contains(e.target) &&
      !inputRef.current.contains(e.target)
    )
      SetShowDataList(false);
  };

  useEffect(() => {
    if (showDataList) document.body.addEventListener("click", checkClick);

    return () => {
      document.body.removeEventListener("click", checkClick);
    };
  }, [showDataList]);

  const input = (formik) => {
    const errorClasses =
      form?.meta.error && form?.meta.touched
        ? "border-2 border-red-700 focus:outline-red-200"
        : "focus:outline-blue-200 border-zinc-400";

    if (formik)
      return (
        <div className="mt-1 mb-3 flex flex-col gap-2">
          <label
            htmlFor={form.field.name}
            className={`font-semibold after:content-['${form?.content}'] after:ml-0.5 after:text-red-500`}
          >
            {form.props.label}
          </label>
          <input
            ref={inputRef}
            id={form.field.name}
            className={` ${errorClasses}   border py-0.5 px-2 focus:outline-offset-2 rounded transition ease-out duration-700 `}
            autoComplete="off"
            type="select"
            onFocus={() => SetShowDataList(true)}
            {...form.field}
            {...form.props}
          />
          {form.meta?.error && form.meta?.touched ? (
            <small className="text-red-900 font-medium">
              {form.meta?.error}
            </small>
          ) : null}
        </div>
      );

    return (
      <input
        ref={inputRef}
        type="search"
        className=" focus:outline-blue-200 border-zinc-400 w-full border py-0.5 px-2 focus:outline-offset-2 rounded transition ease-out duration-700"
        value={search}
        onFocus={() => SetShowDataList(true)}
        autoComplete="off"
        onChange={(e) => handleChange(e)}
      />
    );
  };

  const setItemOnFormik = (item) => {
    onSetSearch(item.toLowerCase().trim());

    SetShowDataList(false);
  };

  return (
    <React.Fragment>
      {input(form?.formik)}
      {showDataList && list.length > 0 && (
        <div
          ref={divRef}
          className={` ${form ? form.divWidthClass : "w-full"}  ${
            list.length > 0 ? "border" : ""
          } bg-white  absolute  max-h-[160px] h-fit overflow-auto  z-10 `}
        >
          <ul className="space-y-2 bg-white">
            {list
              .filter((el) => el.toLowerCase().trim().indexOf(search) > -1)
              .map((item) => (
                <li
                  key={item}
                  onClick={
                    form ? () => setItemOnFormik(item) : () => onSetSearch(item)
                  }
                  className="even:bg-[#fafafa] px-3 p-1 cursor-pointer hover:bg-slate-50"
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default Select;
