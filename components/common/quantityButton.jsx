/**
 * Quantity Button and shows a dropdown with numbers to select from
 *
 */

import { removeCartItem, updateItemQuantity } from "@/store/cartReducer";
import { useDispatch } from "react-redux";
import SelectDropdown from "./selectWithDropdown";
import helpers from "@/lib/helpers";

const QuantityButton = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { quantity, productId } = cartItem;

  const quantityOptions = helpers.generateNumbers(null,21)

  const handleChangeQuantity = (quan) => {
    if (quan === 0) return removeCartItem(dispatch, productId);

    updateItemQuantity(dispatch, { productId, quantity: quan });
  };

  return (
    <SelectDropdown
      label="Qty:"
      value={quantity}
      onOptionClick={handleChangeQuantity}
      dropdownOptions={quantityOptions}
    />
  );
};

export default QuantityButton;
