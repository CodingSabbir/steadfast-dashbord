"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const clientReviews = [
  {
    name: "Jhone Dehon",
    title: "CEO of Miracle",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",
    review:
      " Top notch quality and very responsive team. Helped us every step of the way.",
    rating: 4,
  },
  {
    name: "Sarah Doe",
    title: "Manager at TechFlow",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Top notch quality and very responsive team. Helped us every step of the way.",
    rating: 5,
  },
  {
    name: "Mike Smith",
    title: "Founder of InnovateX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Top notch quality and very responsive team. Helped us every step of the way.",
    rating: 4,
  },
  {
    name: "Olivia Johnson",
    title: "Director at Visionary Co.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Top notch quality and very responsive team. Helped us every step of the way.",
    rating: 5,
  },
  {
    name: "Robert Brown",
    title: "CTO of Cloudify",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "Top notch quality and very responsive team. Helped us every step of the way.",
    rating: 5,
  },
];

const ClientReview = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-gray-800 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Client Reviews</h1>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={700}
        loop={true}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="client-review-swiper"
      >
        {clientReviews.map((client, idx) => (
          <SwiperSlide key={idx} className=" md:pt-16">
            <div className="bg-white p-6 rounded-lg relative border border-gray-300 h-full flex flex-col justify-between">
              <FaQuoteLeft className="absolute top-4 left-4 text-[1.3rem] text-[#00b795]" />

              <div className="flex justify-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-[100px] h-[100px] object-cover rounded-full border-4 border-gray-800"
                />
              </div>

              <p className="text-[#424242] text-[0.9rem] mt-6 text-center">
                {client.review}
              </p>

              <div className="flex items-start mt-5 justify-between">
                <div>
                  <h2 className="text-[1.2rem] font-[600]">{client.name}</h2>
                  <p className="text-[1rem] text-[#727272]">{client.title}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) =>
                    index < client.rating ? (
                      <FaStar
                        key={index}
                        className="text-[1.3rem] text-[#ffba24]"
                      />
                    ) : (
                      <FaRegStar
                        key={index}
                        className="text-[1.3rem] text-[#ffba24]"
                      />
                    )
                  )}
                </div>
              </div>

              <FaQuoteLeft className="absolute bottom-4 right-4 rotate-180 text-[1.3rem] text-[#00b795]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-5"></div>

      <style jsx>{`
        .swiper-horizontal
          > .swiper-pagination-bullets
          .swiper-pagination-bullet,
        .swiper-pagination-horizontal.swiper-pagination-bullets
          .swiper-pagination-bullet {
          background: #00b795;
          opacity: 1;
        }
        .client-review-swiper .swiper-pagination-bullet-active {
          background: #00b795;
        }
        .swiper-pagination {
          margin-top: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ClientReview;
