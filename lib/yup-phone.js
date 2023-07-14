/**
 * Uses yup schema
 * This function is attach to yup validators
 * It validate mobile phone numbers
 *
 */

import isMobilePhone from "validator/lib/isMobilePhone";
import validator from "validator";

export default function phone(message) {
  const regexp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return this.test({
    test: (value) =>  regexp.test(value) &&
      isMobilePhone(value, validator.isMobilePhoneLocales),
    message,
  });
}
