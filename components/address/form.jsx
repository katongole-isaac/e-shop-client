import { Form, Formik } from "formik";
import Input from "../common/input";
import FormButton from "../common/formButton";
import React from "react";

// initialValues = {
//    name : [value, label, type, placeholder ]
// }
// The initialValues take the above format
//
//
//
/**
 * The initialValues should take the following format
 *
 * `let initialValues = {
 *       fieldName: [value, label, type, placeholder, (props)=> JSX.Elem]
 * }`
 * @param {object} Options
 * @returns `JSX.ElEMENT`
 */
const MyForm = ({ initialValues, call, onSubmit, validate, btnLabel }) => {
  const inputs = [];
  const formInitialValues = {};

  let inputOptions = {};

  for (let input in initialValues) {
    const [value, label, type, placeholder, custom] = initialValues[input];

    inputOptions.label = label;
    inputOptions.name = input;

    formInitialValues[input] = value;

    if (type) inputOptions.type = type;

    if (type && placeholder) {
      inputOptions.type = type;
      inputOptions.placeholder = placeholder;
    }
    if (custom) inputs.push(custom(inputOptions));
    else inputs.push(<Input {...inputOptions} />);
  }

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={onSubmit}
      validationSchema={validate}
    >
      <Form>
        {inputs.map((inputElement, idx) => (
          <React.Fragment key={idx}> {inputElement}</React.Fragment>
        ))}

        <FormButton
          label={btnLabel}
          type="submit"
          classes="min-w-[150px] w-[150px]"
        />
      </Form>
    </Formik>
  );
};

export default MyForm;
