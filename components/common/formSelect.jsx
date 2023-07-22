import { useField } from "formik";

import Select from "./select";

/**
 * Select elem used with formik
 * @param {object} options - specify the dropdown opts
 * @returns
 */
const FormSelect = ({ options, content, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <Select
      list={options}
      onSetSearch={helpers.setValue}
      search={field.value}
      form={{ field, formik: true, meta, props, divWidthClass: "w-[430px]" }}
    />
  );
};

export default FormSelect;
