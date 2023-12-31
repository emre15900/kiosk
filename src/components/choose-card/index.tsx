import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// eslint-disable-next-line
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Thumbs, Grid, Pagination } from "swiper/modules";
import { Typography } from "@mui/material";

const cardList = [
  {
    id: 1,
    category: "normal",
    name: "design1",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/08/design1-1693335182.webp",
    status: "active",
  },
  {
    id: 2,
    category: "normal",
    name: "design9",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/08/design9-1693335446.webp",
    status: "active",
  },
  {
    id: 3,
    category: "normal",
    name: "design8",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/08/design8-1693335459.webp",
    status: "active",
  },
  {
    id: 4,
    category: "normal",
    name: "design4",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design4-1693587768.webp",
    status: "active",
  },
  {
    id: 5,
    category: "normal",
    name: "design5",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design5-1693587786.webp",
    status: "active",
  },
  {
    id: 6,
    category: "normal",
    name: "design6",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design6-1693587803.webp",
    status: "active",
  },
  {
    id: 7,
    category: "normal",
    name: "design7",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design7-1693587883.webp",
    status: "active",
  },
  {
    id: 8,
    category: "normal",
    name: "design8",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design8-1693587902.webp",
    status: "active",
  },
  {
    id: 9,
    category: "normal",
    name: "design9",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design9-1693589190.webp",
    status: "active",
  },
  {
    id: 10,
    category: "normal",
    name: "design10",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design10-1693589207.webp",
    status: "active",
  },
  {
    id: 11,
    category: "normal",
    name: "design11",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design11-1693589230.webp",
    status: "active",
  },
  {
    id: 12,
    category: "normal",
    name: "design12",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design12-1693589245.webp",
    status: "active",
  },
  {
    id: 13,
    category: "normal",
    name: "design13",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design13-1693589259.webp",
    status: "active",
  },
  {
    id: 14,
    category: "normal",
    name: "design14",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design14-1693589272.webp",
    status: "active",
  },
  {
    id: 15,
    category: "normal",
    name: "design15",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design15-1693589288.webp",
    status: "active",
  },
  {
    id: 16,
    category: "normal",
    name: "design16",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design16-1693589308.webp",
    status: "active",
  },
  {
    id: 17,
    category: "normal",
    name: "design17",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design17-1693589325.webp",
    status: "active",
  },
  {
    id: 18,
    category: "normal",
    name: "design18",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design18-1693589359.webp",
    status: "active",
  },
  {
    id: 19,
    category: "normal",
    name: "design19",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design19-1693589375.webp",
    status: "active",
  },
  {
    id: 20,
    category: "normal",
    name: "design20",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design20-1693589389.webp",
    status: "active",
  },
  {
    id: 21,
    category: "normal",
    name: "design21",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design21-1693589402.webp",
    status: "active",
  },
  {
    id: 22,
    category: "normal",
    name: "design22",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design22-1693589414.webp",
    status: "active",
  },
  {
    id: 23,
    category: "normal",
    name: "design23",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design23-1693589427.webp",
    status: "active",
  },
  {
    id: 24,
    category: "normal",
    name: "design24",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design24-1693589442.webp",
    status: "active",
  },
  {
    id: 25,
    category: "normal",
    name: "design26",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design26-1693589493.webp",
    status: "active",
  },
  {
    id: 26,
    category: "normal",
    name: "design27",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design27-1693589510.webp",
    status: "active",
  },
  {
    id: 27,
    category: "normal",
    name: "design28",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design28-1693589545.webp",
    status: "active",
  },
  {
    id: 28,
    category: "normal",
    name: "design2",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design2-1694182360.png",
    status: "active",
  },
  {
    id: 29,
    category: "normal",
    name: "design-card",
    card_image:
      "https://cdn.payecards.com/card_designs/2023/09/design-card-1694182424.png",
    status: "active",
  },
];

function ChooseCard() {
  return (
    <div style={{ width: "1000px" }}>
      <Typography variant="h6" sx={{ color: "#444094", mt: "-1.5rem", mb: 4 }}>
        Choose card design
      </Typography>
      <div className="py_GridRowSwiper">
        <Swiper
          pagination={{
            type: "fraction",
            formatFractionCurrent: function (number) {
              return ("0" + number).slice(-2);
            },
            formatFractionTotal: function (number) {
              return ("0" + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
              return (
                '<span class="' +
                currentClass +
                '"></span>' +
                " / " +
                '<span class="' +
                totalClass +
                '"></span>'
              );
            },
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[FreeMode, Navigation, Pagination, Thumbs]}
          className="mySwiper2"
        >
          {cardList &&
            cardList?.map((slider, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      marginBottom: "60px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      src={slider.card_image}
                      width="100%"
                      alt="img"
                      style={{ maxHeight: "250px", objectFit: "contain" }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <Swiper
          grid={{
            rows: 4,
            fill: "row",
          }}
          breakpoints={{
            250: {
              slidesPerView: 3,
              spaceBetween: 10,
              grid: {
                rows: 12,
                fill: "row",
              },
            },
            468: {
              slidesPerView: 3,
              spaceBetween: 10,
              grid: {
                rows: 9,
                fill: "row",
              },
            },
            650: {
              slidesPerView: 4,
              spaceBetween: 10,
              grid: {
                rows: 6,
                fill: "row",
              },
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
              grid: {
                rows: 6,
                fill: "row",
              },
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 10,
              grid: {
                rows: 4,
                fill: "row",
              },
            },
          }}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Grid]}
          className="mySwiper"
        >
          {cardList &&
            cardList?.map((slider, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div style={{ cursor: "pointer" }}>
                    <img
                      src={slider.card_image}
                      width="100%"
                      alt="img"
                      style={{ maxHeight: "75px", objectFit: "contain" }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default ChooseCard;
