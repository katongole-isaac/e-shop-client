/**
 * This hook is used to close modal or dropdowns when clicked outside their divs or container
 *
 */

import { useEffect } from "react";

/**
 * Close modal when clicked outside
 * @param {*} object
 */

const useClickOutside = ({
  onSetShowModal,
  showModal,
  originRef,
  popupRef,
}) => {
  const checkClick = (e) => {

    // if u click outside the div 
    // and not inisde the input

    if (
      !popupRef.current.contains(e.target) &&
      !originRef?.current.contains(e.target)
    )
      onSetShowModal(false);
  };

  const onEscapeKey = (e) => (e.code === "Escape" ? onSetShowModal(false) : "");

  useEffect(() => {
    if (showModal) {
      document.body.addEventListener("click", checkClick);
      document.body.addEventListener("keydown", onEscapeKey);
    }

    return () => {
      document.body.removeEventListener("click", checkClick);
      document.body.removeEventListener("keydown", onEscapeKey);
    };
  }, [showModal]);
};

export default useClickOutside;
