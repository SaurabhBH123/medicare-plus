import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Img,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import AutomaticCarousel from "../../components/Carousels/AutomaticCarousels.jsx";
import { AutoSliderImg } from "../../utils/autoslider.js";
import { DiseaseData } from "../../utils/disease.data.js";
import ManualCarousels from "../../components/Carousels/ManualCarousels.jsx";
import { FeaturedBrandData } from "../../utils/FeaturedBrand.data.js";
import ManualCarouselHomeCard from "../../components/Carousels/ManualCarouselHomeCard.jsx";
import { popularComboDealsURL, bpMonitorURL } from "../../utils/url.js";
import { ayurvedaSectionData } from "../../utils/ayurvedaBrands.data.js";
import { Loader1 } from "../../components/Loader/Loader.jsx";
import Navbar1 from "../../components/Navbar/Navbar1.jsx";
import SearchBar from "../../components/Navbar/SearchBar.jsx";
import Navbar2 from "../../components/Navbar/Navbar2.jsx";
import HomeFooter from "../../components/Footer/HomeFooter.jsx";
import Footer from "../../components/Footer/Footer.jsx";
const Home = () => {
  const [comboData, setComboData] = useState([]);
  const [monintorData, setMonitorData] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const categoryStyle = {
    width: "90%",
    fontSize: "18px",
    color: "#212121",
    pb: [0, 1, 1],
    fontFamily: "sans-serif",
    border: "0px solid red",
    margin: "auto",
  };

  const popularComboDealsData = async () => {
    setIsLoading(true)
    try {
      let res = await axios.get(popularComboDealsURL);
      let arr = [];
      for (let i = 0; i < 10; i++) {
        arr.push(res.data[i]);
      }
      setComboData(arr);
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(err);
    }
  };
  const bpMonintorData = async () => {
    setIsLoading(true)
    try {
      let res = await axios.get(bpMonitorURL);
      let arr = [];
      for (let i = 0; i < 10; i++) {
        arr.push(res.data[i]);
      }
      setMonitorData(arr);
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(err);
    }
  };
  useEffect(() => {
    popularComboDealsData();
    bpMonintorData();
  }, []);
  return (
    <>
    <Navbar1/>
    <SearchBar/>
    <Navbar2/>
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
        <Center pt={[0, 0, 1, 1, 2]} border={"0px solid red"}>
          <Text
            fontSize={["10px", "12px", "18px", "20px", "24px"]}
            color="#666666"
          >
            Medicare: India’s Leading Online Pharmacy & Healthcare Platform
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
      {/* Shop by Health Concerns */}
      <Box m="auto" pt={[3, 2, 5]} bg="rgb(246,246,246)">
        <Text style={categoryStyle}>Shop by Health Concerns</Text>
        <Box bgColor={"white"} pt={[1, 2, 5]}>
          <ManualCarousels allData={DiseaseData} />
        </Box>
      </Box>
      {/* Featured brands */}
      <Box m="auto" pt={[3, 2, 5]} bg="rgb(246,246,246)">
        <Text style={categoryStyle}>Featured brands</Text>
        <Box bgColor={"white"} pt={[1, 2, 5]}>
          <ManualCarousels allData={FeaturedBrandData} />
        </Box>
      </Box>
      {/* BP monitors Data */}
      <Box m="auto" pt={[3, 2, 5]} bg="rgb(246,246,246)">
        <Flex style={categoryStyle} justifyContent={"space-between"}>
          <Text style={categoryStyle}>BP Monitors</Text>
          <Button
            size={"sm"}
            fontWeight={"light"}
            color={"white"}
            bgColor={"rgb(255,111,97)"}
            _hover={{ bg: "rgb(255,111,97)" }}
            py={0}
          >
            See all
          </Button>
        </Flex>
        <Box bgColor={"white"} pt={[1, 2, 5]}>
          {isLoading?<Loader1/>:
          <ManualCarouselHomeCard allData={monintorData} />}
        </Box>
      </Box>
      {/* Popular Combo Deals */}
      <Box m="auto" pt={[3, 2, 5]} bg="rgb(246,246,246)">
        <Flex style={categoryStyle} justifyContent={"space-between"}>
          <Text style={categoryStyle}>Popular Combo Deals</Text>
          <Button
            size={"sm"}
            fontWeight={"light"}
            color={"white"}
            bgColor={"rgb(255,111,97)"}
            _hover={{ bg: "rgb(255,111,97)" }}
            py={0}
          >
            See all
          </Button>
        </Flex>
        <Box bgColor={"white"} pt={[1, 2, 5]}>
          {isLoading?<Loader1/>:
          <ManualCarouselHomeCard allData={comboData} />}
        </Box>
      </Box>
      {/* Ayurveda top brands */}
      <Box m="auto" pt={[3, 2, 5]} bg="rgb(246,246,246)">
        <Text style={categoryStyle}>Ayurveda top brands </Text>
        <Box bgColor={"white"} pt={[1, 2, 5]}>
          <ManualCarousels allData={ayurvedaSectionData} />
        </Box>
      </Box>
      <HomeFooter/>
      <Footer/>
    </>
  );
};

export default Home;
