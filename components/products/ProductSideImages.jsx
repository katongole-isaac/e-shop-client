/**
 * Show  product side images
 *
 */

import Image from "next/image";

const SideImages = ({ images, title, setActiveIndex, activeIndex }) => {
  return (
    <div className="flex h-auto py-2 flex-col gap-4 justify-center items-center ">
      {images.map((image, index) => (
        <SideImage
          key={image}
          title={title}
          image={image}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default SideImages;

const SideImage = ({ image, index, activeIndex, title, setActiveIndex }) => {
  const isActive = activeIndex === index;

  const handleHover = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <div
      onMouseOver={() => handleHover(index)}
      className={`  ${isActive ? "outline" : ""} 
      cursor-pointer w-[40px] h-[50px] border border-gray-300  outline-offset-1 outline-sky-200 rounded  p-1 `}
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-full"
        width={100}
        height={0}
      />
    </div>
  );
};
