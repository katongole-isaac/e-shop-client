/**
 * This is used in the Login & Security
 * for changing customer passwords
 *
 */

import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import SecurityChangeLayout from "../layouts/SecurityChange";
import Input from "../common/input";
import FormButton from "../common/formButton";
import helpers from "@/lib/helpers";
import { getUserReqError, requestChangePassword } from "@/store/reducer";

const EditPassword = () => {
  const initialValues = {
    currentPassword: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch();
  const error = useSelector(getUserReqError());


  const handleSubmit = (values) => {
    requestChangePassword(dispatch, values);
  };

  const validateSchema = yup.object().shape({
    currentPassword: yup.string().required("${path} is required"),
    password: yup
      .string()
      .matches(helpers.passwordRegexp, {
        message:
          "Minimum 6 char(s), madeup of atleast a digit or special char(s)",
      })
      .required("${path} is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password don't match")
      .required("${path} is required"),
  });

  return (
    <SecurityChangeLayout error={error} title="Change password">
      <p className="text-[11px] mb-2">
        To change the password for your [company name] account, use this form.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}
      >
        <Form>
          <Input
            label="Current password"
            type="password"
            name="currentPassword"
            placeholder="password"
          />
          <Input
            label="New password"
            type="password"
            name="password"
            placeholder="password"
          />
          <Input
            label="Confirm password"
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
          />
          <FormButton type="submit" label="save changes" />
        </Form>
      </Formik>
    </SecurityChangeLayout>
  );
};

export default EditPassword;
