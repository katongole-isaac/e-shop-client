/**
 * Address form
 *
 */

import * as yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import helpers from "@/lib/helpers";
import FormSelect from "../common/formSelect";
import MyForm from "./form";
import yupPhone from "@/lib/yup-phone";
import { addAddress, getUserAddress, unSetUserReqErrors } from "@/store/userReducer";

yup.addMethod(yup.string, "phone", yupPhone);

const AddressForm = ({  success, onCloseEdit }) => {
  const [countries, setCountries] = useState([]);

  const [backToEdit, setBackToEdit] = useState(false);

  const address = useSelector(getUserAddress());

  const dispatch = useDispatch();

  useEffect(() => {
    // get a list of countries

    const func = async () => {
      const data = await helpers.getCountries();
      if (data.length > 0) setCountries(data.sort());
    };

    func();
  }, []);



  useEffect(()=>{


    if (success && backToEdit ) onCloseEdit(false);

  }, [backToEdit, success]);

  const initialValues = {
    country: [
      address?.country || "",
      "Country/Region",
      null,
      null,
      (props) => <FormSelect options={countries} {...props} />,
    ],
    fullname: [address?.fullname || "", "Fullname (first and last name)"],
    street: [address?.street || "", "Street address"],
    city: [address?.city || "", "City"],
    state: [address?.state || "", "State/Province/Region"],
    zipCode: [address?.zipCode || "", "Zip Code"],
    phone: [address?.phone || "", "Phone number", "tel", "placeholder"],
  };

  const requiredMsg = "${path} is required";
  const validateSchema = yup.object({
    fullname: yup
      .string()
      .matches(
        helpers.usernameRegexp,
        "Minimum 3 char(s), only contain char(s), digit and _ "
      )
      .required(requiredMsg),
    country: yup
      .string()
      .matches(
        /^(?=.*?[A-Za-z])[A-Za-z]{3,40}$/,
        "Minimum 3 char(s), only letters allowed "
      )
      .required(requiredMsg),
    zipCode: yup.number().required(requiredMsg),
    street: yup
      .string()
      .matches(
        helpers.stringRegexp,
        "Minimum 3 char(s), only contain char(s), digit and _ "
      )
      .required(requiredMsg),
    city: yup
      .string()
      .matches(
        helpers.stringRegexp,
        "Minimum 3 char(s), only contain char(s), digit and _ "
      )
      .required(requiredMsg),
    state: yup
      .string()
      .matches(
        helpers.stringRegexp,
        "Minimum 3 char(s), only contain char(s), digit and _ "
      )
      .required(requiredMsg),
    phone: yup
      .string()
      .required("Phone is required")
      .phone("${path} must be a valid phone"),
  });

  const handleSubmit = (values) => {

    unSetUserReqErrors(dispatch);
    addAddress(dispatch, { address: values });

    setBackToEdit(true);
  };

  return (
    <div className="w-full over-hidden ">
      <MyForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateSchema}
        btnLabel={`${address ? "save changes" : "Add address"}`}
      />
    </div>
  );
};

export default AddressForm;
