import React from "react";
import "./testimonial.css";
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";


const data = [
  {
    avatar: AVT1,
    name: "sam khan",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, doloremque. Animi quae, totam, hic dicta qui sunt, rem aspernatur consequatur architecto sint sit mollitia ipsam atque officia beatae deleniti voluptatum.",
  },
  {
    avatar: AVT2,
    name: "bhumika",
    review:
      "Aryan is a very good friend of mine. He has inspired me to do many works. He is a very determined and dedicated person. He always chases his dreams.",
  },
  {
    avatar: AVT3,
    name: "adobe",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, doloremque. Animi quae, totam, hic dicta qui sunt, rem aspernatur consequatur architecto sint sit mollitia ipsam atque officia beatae deleniti voluptatum.",
  },
  {
    avatar: AVT4,
    name: "ayu",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, doloremque. Animi quae, totam, hic dicta qui sunt, rem aspernatur consequatur architecto sint sit mollitia ipsam atque officia beatae deleniti voluptatum.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avator one" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
