import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io";
import HomePageCard from "../CardComponets/HomePageCard";

import Slider from "react-slick";


const settings = {
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export default function ManualCarouselHomeCard({ allData, }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "37%", md: "37%" });
  const left = useBreakpointValue({ base: "0px", md: "0px" });



  return (
    <Box
      position={"relative"}
      width={"95%"}
      m={'auto'}
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
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        color="rgb(255,111,97)"
        borderRadius="full"
        position="absolute"
        top={top}
        left={left}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <IoIosArrowBack />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        color="rgb(255,111,97)"
        borderRadius="full"
        position="absolute"
        top={top}
        right={left}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <IoIosArrowForward />
      </IconButton>
      <Box w={'95%'} m={'auto'}>

      
      <Slider {...settings} ref={(slider) => setSlider(slider)}  >
        {allData.map((elem) => (
         <HomePageCard elem={elem} key={elem._id}/>
        ))}
      </Slider>
      </Box>
    </Box>
  );
}

