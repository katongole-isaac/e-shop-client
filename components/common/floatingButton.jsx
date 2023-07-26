/**
 * Floating Button
 *
 */

import { IoIosArrowUp } from "react-icons/io";
import Button from "./button";
import { useEffect, useState } from "react";

const FloatingButton = () => {
  const [showBtn, setShowBtn] = useState(false);

  // document totalHeight
  const totalHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  const handleClick = () => {
    const startTime = performance.now();

    // Get the current scroll position
    const startScrollPosition = window.scrollY;
    // Define the duration of the scroll animation in milliseconds
    const duration = 500; 

    // Function to perform the smooth scroll animation
    function scrollStep(timestamp) {
      // Calculate the time elapsed since the beginning of the scroll
      const timeElapsed = timestamp - startTime;

      // Calculate the next scroll position based on time elapsed and easing function (easeOutCubic)
      const nextScrollPosition =
        startScrollPosition - startScrollPosition * (timeElapsed / duration);

      // Set the new scroll position
      window.scrollTo(0, nextScrollPosition);

      // Continue scrolling if the duration is not reached
      if (timeElapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    // Start the smooth scroll animation
    requestAnimationFrame(scrollStep);
  };

  const runScroll = (e) => {

    const twentyPercent = Math.floor(totalHeight * 0.2);

    if (window.scrollY >= twentyPercent) {
      if (showBtn) return;

      //prevent mutliple  re-renders
      setTimeout(() => {
        setShowBtn(true);
      }, 1000);
    } else setShowBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", runScroll);

    return () => {
      window.removeEventListener("scroll", runScroll);
    };
  });

  return (
    <div>
      {showBtn && (
        <Button
          onClick={handleClick}
          classes="rounded-2xl w-[50px] h-[50px] flex items-center justify-center  hover:bg-slate-100 fixed bg-white right-10 bottom-10"
        >
          <p className="rounded"> </p>
          <IoIosArrowUp size={30} className="hover:text-slate-500" />
        </Button>
      )}
    </div>
  );
};

export default FloatingButton;
