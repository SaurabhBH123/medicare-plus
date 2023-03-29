import {
    Stack,
    Box,
    Text,
    Flex,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    SimpleGrid,
  } from "@chakra-ui/react";
  import React from "react";
  import { NavLink } from "react-router-dom";
  import {CATEGORY_ITEMS} from "../../utils/navbar.data.js"
 
  
  export default function Navbar2() {
    const linkColor = useColorModeValue("gray.900", "gray.200");
    const linkHoverColor = useColorModeValue("#ff6f61", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.900");
  
    return (
      <Box
        fontFamily={"Clear Sans"}
        shadow={"sm"}
        display={{ base: "none", md: "block" }}
        py="10px"
      >
        <Stack direction={"row"} spacing={4} justify="center">
          {CATEGORY_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <NavLink to={navItem.href}>
                    <Text
                      p={2}
                      href={navItem.href ?? "#"}
                      fontSize={"sm"}
                      color={linkColor}
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                      }}
                    >
                      {navItem.label}
                    </Text>
                  </NavLink>
                </PopoverTrigger>
  
                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"sm"}
                    maxW={"min-content"}
                  >
                    {navItem.children.map((child, i) => (
                      <SimpleGrid column={2} key={i}>
                        <DesktopSubNav key={i} {...child} />
                      </SimpleGrid>
                    ))}
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </Stack>
      </Box>
    );
  }
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Flex fontSize="14px">
        <Box width={"max-content"}>
          <Text as={NavLink} to={href} role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              color: "#ff6f61",
            }}
            textAlign="left">
  
            <Text transition={"all .3s ease"} fontWeight="700">
              {label}
            </Text>
          </Text>
          {subLabel.length
            ? subLabel.map((sl, i) => (
              <Text as={NavLink} key={i} to={href} role={"group"}
                display={"block"}
                p={2}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "#ff6f61",
                }}
                textAlign="left"
              >
                <Text fontSize={"sm"}>{sl}</Text>
              </Text>
            ))
            : null}
        </Box>
      </Flex>
    );
  };
  
  