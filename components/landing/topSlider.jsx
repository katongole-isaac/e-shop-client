/**
 * This contains the top slider
 *
 */

import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";

import kitchenImage from "@/assets/images/kitchen.jpg";
import ToyImage from "@/assets/images/toys.jpg";
import PadsImage from "@/assets/images/pads.jpg";
import BooksImage from "@/assets/images/books.jpg";
import BeautyImage from "@/assets/images/beauty.jpg";

const Slider = () => {
  const images = [BeautyImage, BooksImage, kitchenImage, ToyImage, PadsImage];

  return (
    <React.Fragment>
      <div className="min-h-96  ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper cursor-grabbing "
        >
          {images.map((item, idx) => (
            <SwiperSlide>
              <Image
                src={item}
                alt={item}
                width={1000}
                height={1000}
                objectFit="contain"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                className="w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Slider;
