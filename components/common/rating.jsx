/**
 * Custom rating component
 *
 */

import { Rating } from "react-simple-star-rating";

const CustomRating = ({ rating, size }) => {
  return (
    <Rating
      readonly
      size={size}
      SVGclassName="inline-block"
      allowFraction
      initialValue={rating}
      fillColor="#FFA41C"
    />
  );
};

export default CustomRating
