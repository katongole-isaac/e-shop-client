/**
 * Used on the Login & Security Page
 *
 */

import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import SecurityChangeLayout from "../layouts/SecurityChange";
import Input from "../common/input";
import FormButton from "../common/formButton";
import helpers from "@/lib/helpers";
import {
  getCurrentUser,
  getUserReqError,
  requestChangeUserName,
  unSetUserReqErrors,
} from "../../store/userReducer";

const EditName = () => {
  const dispatch = useDispatch();

  const user = useSelector(getCurrentUser());
  const error = useSelector(getUserReqError());

  const handleSubmit = (values) => {
    unSetUserReqErrors(dispatch);
    const payload = {
      ...values,
      originalFullname: user.fullname,
    };

    requestChangeUserName(dispatch, payload);
  };

  return (
    <SecurityChangeLayout error={error} title="Change your name">
      <p className="text-[11px] mb-3">
        If you want to change the name associated with your [company name]
        customer account, you may do so below. Be sure to click the Save Changes
        button when you are done.
      </p>

      <Formik
        initialValues={{
          fullname: "",
        }}
        validationSchema={yup.object({
          fullname: yup
            .string()
            .matches(
              helpers.usernameRegexp,
              "Minimum 3 char(s), only contain char(s), digit and _ "
            )
            .required("${path} is required"),
        })}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <Input label="New name" name="fullname" />
          <FormButton label="save changes" type="submit" />
        </Form>
      </Formik>
    </SecurityChangeLayout>
  );
};

export default EditName;
