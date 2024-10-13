import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/bg1.jpg`} alt="" />
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
          <h4 className="text-8xl en-txt text-white mb-2">Mario</h4>
          <p className="text-2xl text-white mb-14">마리오와 함께 신나는 모험을 떠나보세요!</p>
          <a
            href="/"
            className="text-white border-2 border-white border-solid px-4 py-2 rounded-full hover:bg-white hover:!text-[#ff541e]"
          >
            더보기
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/bg2.jpg`} alt="" />
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
          <h4 className="text-8xl en-txt text-white mb-2">Zelda</h4>
          <p className="text-2xl text-white mb-14">젤다와 함께 신나는 모험을 떠나보세요!</p>
          <a
            href="/"
            className="text-white border-2 border-white border-solid px-4 py-2 rounded-full hover:bg-white hover:!text-[#ff541e]"
          >
            더보기
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/bg3.jpg`} alt="" />
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
          <h4 className="text-8xl en-txt text-white mb-2">Pokemon</h4>
          <p className="text-2xl text-white mb-14">포켓몬과 함께 신나는 모험을 떠나보세요!</p>
          <a
            href="/"
            className="text-white border-2 border-white border-solid px-4 py-2 rounded-full hover:bg-white hover:!text-[#ff541e]"
          >
            더보기
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
