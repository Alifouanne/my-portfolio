import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Angelina Thompson",
    review:
      "He will always try to do what is required, even if it means performing tasks that are not in the job description or if required to do extra work unexpectedly. However, may sometimes complain about the extra load. ali willingly joins groups, but tends to remain anonymous. ali pays great attention to detail. He always presented work properly checked and completely free of error. ",
  },
  {
    avatar: AVTR2,
    name: "Gael Myers",
    review:
      "ali willingly joins groups, but tends to remain anonymous. ali pays great attention to detail. He always presented work properly checked and completely free of error. He will always try to do what is required, even if it means performing tasks that are not in the job description or if required to do extra work unexpectedly. However, may sometimes complain about the extra load. ",
  },
  {
    avatar: AVTR3,
    name: "Nicolas Wright",
    review:
      "ali willingly joins groups, but tends to remain anonymous. He will always try to do what is required, even if it means performing tasks that are not in the job description or if required to do extra work unexpectedly. However, may sometimes complain about the extra load. ali pays great attention to detail. He always presented work properly checked and completely free of error. ",
  },
  {
    avatar: AVTR4,
    name: "Millie Norman",
    review:
      "He will always try to do what is required, even if it means performing tasks that are not in the job description or if required to do extra work unexpectedly. However, may sometimes complain about the extra load. ali pays great attention to detail. He always presented work properly checked and completely free of error. ali willingly joins groups, but tends to remain anonymous. ",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"   // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt="" className="d-block w-100" />
              </div>
              <h5 className="client__name">{name} </h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
