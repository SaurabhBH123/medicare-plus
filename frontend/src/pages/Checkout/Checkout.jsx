import { Heading, Stack, VStack } from "@chakra-ui/react";

// import Address from "../../components/CheckoutComponents/Address";
import Address from "../../components/CheckoutComponents/Address";
import PaymentOptions from "../../components/CheckoutComponents/PaymentOptions";
import PlaceOrderButton from "../../components/CheckoutComponents/PlaceOrderButton";
import { useState } from "react";
import Navbar1 from "../../components/Navbar/Navbar1";
import Footer5 from "../../components/Footer/Footer5";

export default function Checkout(props) {
  const [checkAddress, setCheckAddress] = useState(false);
  const [checkPayment, setCheckPayment] = useState(false);
  // console.log(checkAddress,checkPayment)
  return (
    <>
      <Navbar1 />

      <VStack>
        <Stack
          direction={["column", "column", "column", "row"]}
          justifyContent="space-between"
          padding={["10px 50px", "10px 50px", "10px 50px", "10px 100px"]}
        >
          <VStack width={["100%", "100%", "100%", "100%"]}>
            <Heading
              fontWeight="bold"
              padding="10px"
              fontSize="2xl"
              color="rgb(255,111,97)"
            >
              Shipping Address
            </Heading>
            <Address setCheckAddress={setCheckAddress} />
          </VStack>
          <VStack
            width={["100%", "100%", "100%", "100%"]}
            border={"0px solid black"}
          >
            <Heading
              fontWeight="bold"
              padding="10px"
              fontSize="2xl"
              color="rgb(255,111,97)"
            >
              Payment Options
            </Heading>
            <PaymentOptions setCheckPayment={setCheckPayment} />
          </VStack>
        </Stack>
        <PlaceOrderButton isDisabled={checkAddress && checkPayment} />
      </VStack>
      <Footer5 />
    </>
  );
}
