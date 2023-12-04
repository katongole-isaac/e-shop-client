/**
 * Reusable logic for forms
 *
 */

const { useState } = require("react");

const useForm = ({ data }) => {
  const [values, setValues] = useState({ data });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(
      (prev = {
        ...prev,
        [name]: value,
      })
    );
  };

  const handleFocus = (e) => {};

  return { values, errors, handleChange, handleSubmit };
};


export default useForm;