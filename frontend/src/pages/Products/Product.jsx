import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/Product/action";
import "./Product.css";
import { ProductCard } from "./ProductCard";
import Pagination from "./Pagination";
import { SearchContext } from "../../Context/SearchContext";
import HomeNavbar from "../../components/Navbar/HomeNavbar";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar1";
import SearchBar from "../../components/Navbar/SearchBar";

const Product = () => {
  const { data } = useSelector((state) => state.ProductReducer.products);
  const [age,setAge] = useState('')
  const [range,setRange] = useState('')
  const dispatch = useDispatch();
  const [page,setPage] = useState(1)
  const {query}=useContext(SearchContext)


  const handleSort = (e)=>{
    setRange(e.target.value)
    console.log(range)

    // dispatch(getProducts(e.target.value));
  }
  const handleSelect = (e) =>{
    setAge(e.target.value)
    // dispatch(getProducts(e.target.value))
  }
  // console.log(data)
    useEffect(()=>{
      // if(query){
      //   // let url=`https://kind-jade-eagle-sari.cyclic.app/productPage/search?q=${query}`;
      //   let url=`https://kind-jade-eagle-sari.cyclic.app/productPage?search=${query}`;
      //   let productParams={
      //     params:{
      //       sort:range,
      //       category:age,
      //       page:page||1,
      //       limit:16
      //     }
      //   }
      //     dispatch(getProducts(url,productParams));
      // }else{
        let url=`https://kind-jade-eagle-sari.cyclic.app/productPage`;
        let productParams={
          params:{
            search:query,
            sort:range,
            category:age||'Child',
            page:page||1,
            limit:16
          }
        }
          dispatch(getProducts(url,productParams));
      // }
      
      
    },[range,age,page,query])
  return (
    <>
    <Navbar1/>
    <SearchBar/>
      <div className="main_container">
        {/* <div className="sidebar">
          <Sidebar />
        </div> */}
        <Box
          w="20%"
          h="500px"
          border="1px solid gray"
          pl={4}
          backgroundColor="white"
          // className="sidebar"
        >
          <Heading size="md" textAlign="left" mt={2}>
            Filters
          </Heading>
          <hr />
          <Heading size="md" textAlign="left" mt={2}>
            Discount
          </Heading>
          <Box mt={4} mb={4}>
            <Stack direction="row">
              <Checkbox>Less than 10%</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
            <Stack direction="row">
              <Checkbox>10% And Above</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
            <Stack direction="row">
              <Checkbox>20% And Above</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
            <Stack direction="row">
              <Checkbox>30% And Above</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
          </Box>
          <hr />
          <Heading size="md" textAlign="left" mt={2}>
            Age
          </Heading>
          <Box mt={4} mb={4}>
            <Stack direction="row">
              <Checkbox value='' onChange={handleSelect}>All</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
            <Stack direction="row">
              <Checkbox value='Child' onChange={handleSelect}>Child</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
            <Stack direction="row">
              <Checkbox value='adult' onChange={handleSelect}>Adult</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
            <Stack direction="row">
              <Checkbox value='elderly' onChange={handleSelect}>Elderly</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
          </Box>
          <hr />
        </Box>
        <div className="product">
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem color="red">
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="red">
              <BreadcrumbLink href="#">Categories</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Vitamins & Nutrition</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading size="lg" textAlign="left">
            Vitamins & Nutrition
          </Heading>
          <Image
            src="https://onemg.gumlet.io/3e2ea140-5335-41be-9634-ca9abb61867e_1667453850.jpg?w=1062&h=124&format=auto"
            alt="Dan Abramov"
            mt={3}
          />
          <div style={{ padding: "20px" }}>
            <Flex justifyContent={"space-between"}>
              <h1 style={{ fontWeight: "600", fontSize: "20px" }}>
                All Products
              </h1>
              <div>
                <Flex gap={2}>
                  <h3>Sort By</h3>
                  <select
                    onChange={handleSort}
                    style={{ border: "1px solid grey", fontWeight: "600" }}
                  >
                    <option value="">Relevance</option>
                    <option value="asc">Price: Low To High</option>
                    <option value="desc">Price: High To Low</option>
                    <option value="rlth">Rating: Low To High</option>
                    <option value="rhtl">Rating: High To Low</option>
                  </select>
                </Flex>
              </div>
            </Flex>
          </div>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
            {data?.map((item) => {
              // console.log(item)
              return <ProductCard key={item._id} product={item} />;
            })}
          </SimpleGrid>
          {/* <div style={{display:'flex',marginTop:'20px',gap:'10px',justifyContent:'center',alignItems:'center'}}>
          <Button disabled={page===1} onClick={()=>setPage(prev=>prev-1)}>PREV</Button>
          <Button>{page}</Button>
          <Button onClick={()=>setPage(prev=>prev+1)}>NEXT</Button>
        </div> */}
        <Pagination current={page} onChange={(page)=>setPage(page)}/>
        </div>
      </div>
      <Footer/>
    </>
    // <Flex p={5}>
    // <Box w="20%" h="500px" border="1px solid black" pl={4} backgroundColor='white'>
    //   <Heading size="md" textAlign="left">
    //     Filters
    //   </Heading>
    //   <hr />
    //   <Heading size="md" textAlign="left">
    //     Discount
    //   </Heading>
    //   <Box mt={4} mb={4}>
    //     <Stack direction="row">
    //       <Checkbox>Less than 10%</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //     <Stack spacing={20} direction="row">
    //       <Checkbox>10% And Above</Checkbox>
    //       <Text>52</Text>
    //     </Stack>
    //     <Stack spacing={20} direction="row">
    //       <Checkbox>20% And Above</Checkbox>
    //       <Text>52</Text>
    //     </Stack>
    //     <Stack spacing={20} direction="row">
    //       <Checkbox>30% And Above</Checkbox>
    //       <Text>52</Text>
    //     </Stack>
    //   </Box>
    //   <hr />
    //   <Heading size="md" textAlign="left">
    //     Age
    //   </Heading>
    //   <Box mt={4} mb={4}>
    //     <Stack direction="row">
    //       <Checkbox>All</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //     <Stack direction="row">
    //       <Checkbox>Child</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //     <Stack direction="row">
    //       <Checkbox>Adult</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //     <Stack direction="row">
    //       <Checkbox>Elderly</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //   </Box>
    //   <hr />
    // </Box>
    //   <Box w="80%" h="auto" border="1px solid black" p={5}>
    //     <h1>Products</h1>
    // <Breadcrumb
    //   spacing="8px"
    //   separator={<ChevronRightIcon color="gray.500" />}
    // >
    //   <BreadcrumbItem color="red">
    //     <BreadcrumbLink href="#">Home</BreadcrumbLink>
    //   </BreadcrumbItem>

    //   <BreadcrumbItem color="red">
    //     <BreadcrumbLink href="#">Categories</BreadcrumbLink>
    //   </BreadcrumbItem>

    //   <BreadcrumbItem isCurrentPage>
    //     <BreadcrumbLink href="#">Vitamins & Nutrition</BreadcrumbLink>
    //   </BreadcrumbItem>
    // </Breadcrumb>
    // <Heading size="lg" textAlign="left">
    //   Vitamins & Nutrition
    // </Heading>
    // <Image
    //   src="https://onemg.gumlet.io/3e2ea140-5335-41be-9634-ca9abb61867e_1667453850.jpg?w=1062&h=124&format=auto"
    //   alt="Dan Abramov"
    //   mt={3}
    // />
    //     <Box border="1px solid red" mt={5} backgroundColor='white'>
    //       <Flex>
    //         <Heading size="md">All Products</Heading>
    //         <Spacer />
    //         <HStack>
    //           <Box>
    //             <Text>Sort By</Text>
    //           </Box>
    //           <Box>
    //             <Select placeholder="Select option">
    //               <option value="option1">Option 1</option>
    //               <option value="option2">Option 2</option>
    //               <option value="option3">Option 3</option>
    //             </Select>
    //           </Box>
    //         </HStack>
    //       </Flex>
    //       <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={5}>
    //         {data.map(
    //           (product) => (
    //             <Box p={3} border="1px">
    //               <Box border="1px" pt={6} pb={6}>
    //                 <Center>
    //                   <Image src={product.image_url} alt="product_pic" />
    //                 </Center>
    //               </Box>
    //               <Text textAlign="left" fontWeight='bold'>
    //                 {product.product_title}
    //               </Text>
    //               <Text textAlign="left" fontSize='xs'>{product.pack_size}</Text>
    //               <HStack>
    //                 <Badge variant='solid' colorScheme='green'>
    //                   {product.avg_rating}
    //                   {product.avg_rating !== "" ? (
    //                     <StarIcon color="white" />
    //                   ) : (
    //                     ""
    //                   )}
    //                 </Badge>
    //                 <Text>{product.total_ratings}</Text>
    //               </HStack>
    //               <Flex alignItems="flex-start">
    //                 {product.discount !== "" ? (
    //                   <Flex direction='column'>
    //                     <HStack>
    //                       <Text color='gray'>MRP</Text>
    //                       <strike color='gray'>₹{product.MRP}</strike>
    //                       <Text color='green.700'>{product.discount}</Text>
    //                     </HStack>
    //                     <Text textAlign='left'>₹{product.final_price}</Text>
    //                   </Flex>
    //                 ) : (
    //                   <Flex><Text color='gray'>MRP</Text> ₹{product.final_price}</Flex>
    //                 )}
    //                 <Spacer></Spacer>
    //                 <Box>
    //                   <Button>ADD</Button>
    //                 </Box>
    //               </Flex>
    //             </Box>
    //           )
    //           // <img src={product.image_url} alt="product_pic"/>
    //           // <h4>{product.product_title}</h4>
    //           // <p>{product.pack_size}</p>
    //         )}
    //       </Grid>
    //     </Box>
    //   </Box>
    // </Flex>
  );
};

export default Product;

//const data = await ProductPageModel.find( {$regex: req.obj.q, $options: 'i'  }).skip(skip).limit(limit).sort(sorting)