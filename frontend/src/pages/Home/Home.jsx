import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Img,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AutomaticCarousel from "../../Components/Carousels/AutomaticCarousels.jsx";
import { AutoSliderImg } from "../../utils/autoslider.js";
import { DiseaseData } from "../../utils/disease.data.js";
import ManualCarousels from "../../Components/Carousels/ManualCarousels.jsx";
import { FeaturedBrandData } from "../../utils/FeaturedBrand.data.js";

const Home = () => {
  const categoryStyle = {
    width: "90%",
    fontSize: "18px",
    color: "#212121",
    pb: [0, 1, 1],
    fontFamily: "sans-serif",
    border: "0px solid red",
    margin: "auto",
  };
  return (
    <>
      <Box pt={"5px"} w={"95%"} m={"auto"}>
        {/* auto slider */}
        <Grid
          templateColumns={{ base: "100% 0%", md: "100%% 0%", lg: "70% 30%" }}
          border={"0px solid red"}
          h={["130px", "160px", "200px"]}
          m={"auto"}
        >
          <GridItem>
            <AutomaticCarousel cards={AutoSliderImg} />
          </GridItem>
          <GridItem>
            <Img
              src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/421855e3-ec1c-42c9-a5b4-d5153c8f2f54.png"
              alt={"auto-slider-right-static-image"}
              objectFit={"cover"}
            />
          </GridItem>
        </Grid>
        {/* tata 1mg name */}
        <Center pt={[1, 2, 5]} border={"1px solid red"}>
          <Text
            fontSize={{ base: "12px", sm: "16px", md: "20px", lg: "24px" }}
            color="#666666"
          >
            Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
          </Text>
        </Center>
      </Box>
      <Box bg="rgb(246,246,246)">
        <Divider color={"rgb(224,224,224)"} />
        {/* care plan */}
        <Box pt={[1, 2, 5]}>
          <Img
            _hover={{ cursor: "pointer" }}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png"
            w="90%"
            h={["50px", "90px", "120px"]}
            m="auto"
            alt="sec2_poster"
          />
        </Box>
      </Box>
      <Box m="auto" pt={[3, 2, 5]} bg="rgb(246,246,246)">
        <Text style={categoryStyle}>Shop by Health Concerns</Text>
        <Box bgColor={'white'} pt={[1,2,5]}>

        <ManualCarousels allData={DiseaseData} />
        </Box>
      </Box>
      <Box m="auto" pt={[3, 2, 5]} bg="rgb(246,246,246)">
        <Text style={categoryStyle}>Featured brands</Text>
        <Box bgColor={'white'} pt={[1,2,5]}>
        <ManualCarousels allData={FeaturedBrandData} />
        </Box>
      </Box>
    

    
    </>
  );
};

export default Home;
