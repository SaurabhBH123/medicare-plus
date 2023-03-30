import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Divider,
  Img,
} from "@chakra-ui/react";

import { FaShoppingCart } from "react-icons/fa";
import logo from "../../Images/logo.png";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { NAV_ITEMS, AUTH_ITEMS } from "../../utils/navbar.data.js";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar1() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bgColor={"white"}
        color={useColorModeValue("gray.900")}
        minH={"40px"}
        py={{ base: 2 }}
        px={{ base: 2 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify="center"
      >
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start", lg: "start" }}
        >
          <Box
            as={NavLink}
            to="/"
            cursor={"pointer"}
            border={"0px solid black"}
          >
            <Img src={logo} alt={"logo"} w={["60px", "90px", "100px"]}  h={["30px", "30px", "50px"]}/>
          </Box>

          <Flex
            display={{ base: "none", md: "none", lg: "flex" }}
            alignItems={"center"}
            mx={"5px"}
            my={"5px"}
            border={"0px solid black"}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          border={"0px solid black"}
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          <NavLink to="/login">
            <Button
              color={useColorModeValue("gray.900")}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              borderRight={"1px solid"}
              borderRadius="none"
              pr={"10px"}
            >
              Login
            </Button>
          </NavLink>

          <NavLink to="/signup">
            <Button
              variant={"link"}
              fontSize={"sm"}
              fontWeight={400}
              color={useColorModeValue("gray.900")}
              ml={'10px'}
            >
              Sign Up
            </Button>
          </NavLink>
        </Flex>

        <Flex
          justify="space-evenly"
          gap={"10px"}
          align="center"
          border={"0px solid red"}
          ml={"20px"}
        >
          <Text
            as="p"
            cursor={"pointer"}
            mt={"15px"}
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            Offer
          </Text>
          <RouterLink to="/cart">
            <FaShoppingCart
              //   color={ ? "#ff6f61" : "#000"}
              color={"#000"}
              fontSize={"20px"}
              cursor="pointer"
            />
          </RouterLink>
          <Text
            as="p"
            mt={"15px"}
            cursor="pointer"
            display={{ base: "none", md: "none", lg: "flex" }}
            fontSize={"14px"}
          >
            Need Help?
          </Text>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue("#ff6f61", "white");
  return (
    <Stack
      direction={"row"}
      spacing={4}
      alignItems={"center"}
      m={"auto"}
      justifyContent={"center"}
    >
      {NAV_ITEMS.map((navItem, i) => (
        <Flex key={navItem.label}  justifyContent={'center'} alignItems={'center'}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NavLink to={navItem.href}>
                <Text
                  p={2}
                  border={"0px solid green"}
                  fontSize={"md"}
                  fontWeight={700}
                  fontFamily="Clear Sans"
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </NavLink>
            </PopoverTrigger>
          </Popover>
        </Flex>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }} bg="#FFFFFF">
      {AUTH_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      <Divider />
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
