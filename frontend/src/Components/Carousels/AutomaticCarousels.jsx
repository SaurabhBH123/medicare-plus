import React from "react";
import { Box } from "@chakra-ui/react";

import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function AutomaticCarousel({ cards }) {
  const [slider, setSlider] = React.useState(null);

  return (
    <Box
      position={"relative"}
      height={"100%"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={["120px", "140px", "167px"]}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={["contain", "contain", "cover"]}
            backgroundImage={url}
          />
        ))}
      </Slider>
    </Box>
  );
}
