import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Grid } from "@mui/material";

function ChooseCard() {
  return (
    <Grid sx={{ width: "1000px" }}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Grid sx={{ width: "300px" }}>
            <img src="/images/card-1.png" alt="img" width="100%" />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid sx={{ width: "300px" }}>
            <img src="/images/card-2.png" alt="img" width="100%" />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid sx={{ width: "300px" }}>
            <img src="/images/card-3.png" alt="img" width="100%" />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid sx={{ width: "300px" }}>
            <img src="/images/card-2.png" alt="img" width="100%" />
          </Grid>
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
}

export default ChooseCard;
