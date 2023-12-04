/**
 * Credit card component
 *
 */
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

import Button from "@/components/common/button";
import helpers from "@/lib/helpers";
import yupCreditCard from "@/lib/yup-creditcard";
import CreditCardInput from "../credit-card/credit-input";
import ExpirationDate from "../credit-card/expiryDate";
import CreditCardIconDiv from "../credit-card/creditCardIcons";
import CvcTooltip from "../credit-card/cvc-tooltip";
import CreditCardHeader from "../credit-card/credit-card-header";

// adding credit card func to yup
yup.addMethod(yup.number, "creditCard", yupCreditCard);

const CreditCard = () => {
  const months = helpers.generateNumbers(13);
  months.splice(0, 1); // removes 0 from the list

  const years = helpers.generateNumbers(2023, 2041); // options for dropdown

  const [month, setMonth] = useState(months[0]);
  const [year, setYear] = useState(years[0]);

  const initialValues = {
    cardNumber: "",
    cardName: "",
    cvc: "",
  };

  const handleSubmit = (values) => {
    const result = { ...values, month, year };
    console.log(result);
  };

  const requiredMsg = "${path} is required";
  const validationSchema = yup.object().shape({
    cardName: yup
      .string()
      .required(requiredMsg)
      .matches(new RegExp(/^[A-Za-z\s]+$/)),
    cardNumber: yup
      .number()
      .required(requiredMsg)
      .creditCard("Invalid card number"),
    cvc: yup.number().required(requiredMsg),
  });

  return (
    <div className="max-w-[620px] m-auto bg-[#fafafa] rounded-md  ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(val) => handleSubmit(val)}
      >
        {/* headder */}

        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <CreditCardHeader />

              <div className="flex divide-x-2 divide-neutral-100 py-8 ">
                <div className="flex flex-col gap-2 w-max pl-4 pr-4  h-full ">
                  <CreditCardInput
                    label="Card number"
                    inputProps={{
                      ...formik.getFieldProps("cardNumber"),
                      type: "tel",
                    }}
                    error={
                      formik.errors.cardNumber && formik.touched.cardNumber
                        ? formik.errors.cardNumber
                        : null
                    }
                  />

                  <CreditCardInput
                    label="Name on card"
                    inputProps={{ ...formik.getFieldProps("cardName") }}
                    error={
                      formik.errors.cardName && formik.touched.cardName
                        ? formik.errors.cardName
                        : null
                    }
                  />
                  <CreditCardInput
                    label="Expiration date"
                    input={
                      <React.Fragment>
                        <ExpirationDate
                          years={years}
                          months={months}
                          month={month}
                          year={year}
                          onSetMonth={setMonth}
                          onSetYear={setYear}
                        />
                      </React.Fragment>
                    }
                    inputProps={{ ...formik.getFieldProps("expiry") }}
                  />
                  <div className="">
                    <CreditCardInput
                      classes="w-20 -ml-6 "
                      label="Security Code (CVV/CVC)"
                      error={
                        formik.errors.cvc && formik.touched.cvc
                          ? formik.errors.cvc
                          : null
                      }
                      inputProps={{
                        type: "password",
                        maxLength: 4,
                        ...formik.getFieldProps("cvc"),
                      }}
                    >
                      <CvcTooltip />
                    </CreditCardInput>
                  </div>
                </div>

                <CreditCardIconDiv />
              </div>

              {/* footer */}
              <div className="bg-[#F0F2F2]  px-4 py-3 flex justify-end gap-3 ">
                <Button
                  label="cancel"
                  classes="min-w-[fit_!important] w-fit  shadow-md bg-neutral-100 hover:bg-neutral-200 rounded-md"
                />
                <Button
                  label="Add your card"
                  type="submit"
                  classes="shadow-md bg-yellow-400 px-2 rounded-md hover:bg-yellow-500"
                />
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreditCard;
