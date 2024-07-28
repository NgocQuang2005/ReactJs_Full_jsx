import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import { Navigation,Pagination } from 'swiper/modules';
import sld1 from "../assets/images/slide1.webp";
import sld2 from "../assets/images/slide2.webp";
import sld3 from "../assets/images/slide3.webp";
import sld4 from "../assets/images/slide4.webp";

const ImageSlider = () => {
  return (
    <Swiper
      spaceBetween={50} // Khoảng cách giữa các slide
      slidesPerView={1} // Số lượng slide hiển thị mỗi lần
      navigation={true} modules={[Navigation,Pagination]}  // Hiển thị các nút điều hướng
      pagination={{ clickable: true }} // Hiển thị phân trang và cho phép nhấp vào phân trang
      loop // Lặp lại slider khi đến cuối
    >
      <SwiperSlide>
        <img src={sld1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sld2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sld3} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sld4} alt="Slide 4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
