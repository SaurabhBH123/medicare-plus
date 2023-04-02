import React from "react";
import {
  Box,
  Image,
  Text,
} from "@chakra-ui/react";



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

export default function LoginCarousels({ allData }) {
  return (
    <Box w={'md'} m={"auto"}  border={'1px solid red'} h={'300px'}>
     

      <Box w={"70%"} m={"auto"} border={'1px solid red'} h={'300px'}>
        <Slider {...settings}>
          {allData.map((elem) => (
            <Box key={elem.name} border={"0px solid green"} h={'300px'}>
              <Box
                style={{ cursor: "pointer" }}
                _hover={{ boxShadow: "xl", rounded: "md" }}
              >
                <Image
                  // style={{ display: "flex", margin: "1px auto" }}
                  src={elem.img}
                />
                <Text textAlign="center" py="2" px="2">
                  {elem.name}
                </Text>
                <Text textAlign="center" py="2" px="2">
                  {elem.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
