/**
 * yup addon - checks if the credit card number is true or false
 *
 */

import isCreditCard from "validator/lib/isCreditCard";

export default function phone(message) {
  return this.test({
    test: (value) => isCreditCard(value.toString(), { provider: "" }),
    message,
  });
}
