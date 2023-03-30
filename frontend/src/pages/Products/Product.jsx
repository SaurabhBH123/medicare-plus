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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/Product/action";
import "./Product.css";
import { ProductCard } from "./ProductCard";

const Product = () => {
  const { data } = useSelector((state) => state.ProductReducer.products);
  const dispatch = useDispatch();
    // console.log(compGlassesData)
    // console.log(data)

    useEffect(()=>{
        dispatch(getProducts());
    },[])
  return (
    <>
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
          className="sidebar"
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
              <Checkbox>All</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
            <Stack direction="row">
              <Checkbox>Child</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
            <Stack direction="row">
              <Checkbox>Adult</Checkbox>
              <Spacer></Spacer>
              <Text pr={3}>52</Text>
            </Stack>
            <Stack direction="row">
              <Checkbox>Elderly</Checkbox>
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
                  <h2 style={{ fontWeight: "700" }}>Sort By</h2>
                  <select
                    // onChange={(e) => handelSelect(e.target.value)}
                    style={{ border: "1px solid grey", fontWeight: "600" }}
                  >
                    <option value="rel">Relevance</option>
                    <option value="plth">Price: Low To High</option>
                    <option value="phtl">Price: High To Low</option>
                    <option value="rlth">Rating: Low To High</option>
                    <option value="rhtl">Rating: High To Low</option>
                  </select>
                </Flex>
              </div>
            </Flex>
          </div>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
            {data?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
          </SimpleGrid>
        </div>
      </div>
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
