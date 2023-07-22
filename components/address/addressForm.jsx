/**
 * Address form
 *
 */

import * as yup from "yup";

import Input from "../common/input";
import MyForm from "./form";
import helpers from "@/lib/helpers";
import FormSelect from "../common/formSelect";

const AddressForm = () => {
  const initialValues = {
    country: ["", "Country/Region"],
    select: ["", "Select", null, null, (props) => <FormSelect {...props} />],
    fullname: ["", "Fullname (first and last name)"],
    street: ["", "Street address"],
    city: ["", "City"],
    state: ["", "State/Province/Region"],
    zipCode: ["", "Zip Code"],
    phone: ["", "Phone number", "tel", "placeholder"],
  };

  const validateSchema = yup.object({
    fullname: yup
      .string()
      .matches(
        helpers.usernameRegexp,
        "Minimum 3 char(s), only contain char(s), digit and _ "
      )
      .required("${path} is required"),
    select: yup.string().required("${path} is required"),
    country: yup
      .string()
      .matches(
        /^(?=.*?[A-Za-z])[A-Za-z]{3,40}$/,
        "Minimum 3 char(s), only letters allowed "
      )
      .required("${path} is required"),
    street: yup
      .string()
      .matches(
        helpers.stringRegexp,
        "Minimum 3 char(s), only contain char(s), digit and _ "
      )
      .required("${path} is required"),
    city: yup
      .string()
      .matches(
        helpers.stringRegexp,
        "Minimum 3 char(s), only contain char(s), digit and _ "
      )
      .required("${path} is required"),
    state: yup
      .string()
      .matches(
        helpers.stringRegexp,
        "Minimum 3 char(s), only contain char(s), digit and _ "
      )
      .required("${path} is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  <MyForm initialValues onSumbit validate />;
  return (
    <div className="w-full over-hidden border">
      <MyForm
        initialValues={initialValues}
        onSumbit={handleSubmit}
        validate={validateSchema}
        btnLabel="Add address"
      />
    </div>
  );
};

export default AddressForm;
