import {
  Heading,
  VStack,
  Text,
  Input,
  Button,
  Image,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import qrCode from "../../Images/qrCode.png";

export default function Paymentgateway({ gateway, setCheckPayment }) {
  const [isLoggedInToGateway, setIsLoggedInToGateway] = useState(false);
  const [bank, setBank] = useState("");
  const [gatewayID, setGatewayID] = useState("");
  const toast = useToast();
  const totalPayable = "100";
  // setCheckPayment(isLoggedInToGateway);

  if (gateway === "UPI QR Code") {
    return (
      <VStack>
        <Text fontSize="xl">Scan below QR Code to pay the amount</Text>
        <Text fontSize="sm" color="grey">
          Phone Pe / Paytm / Google Pay
        </Text>
        <Image
          src={qrCode}
          width={["50px", "70px", "70px", "100px"]}
          h={["50px", "70px", "70px", "100px"]}
        />
      </VStack>
    );
  }

  return (
    <VStack gap="50px">
      <Heading fontSize="large" textAlign="center">
        You are paying through {gateway}
      </Heading>
      {isLoggedInToGateway ? (
        <>
          <Heading fontSize="xl" color="orange.500" textAlign="center">
            Payment Done
          </Heading>
        </>
      ) : (
        <VStack
          alignItems="center"
          width="50%"
          margin="auto"
          minWidth={["200", "200px", "200px", "300px"]}
        >
          {gateway === "Net Banking" ? (
            <Select
              placeholder="Select your bank"
              onChange={({ target: { value } }) => {
                if (value !== "" || value !== "Select your bank") {
                  setBank(value);
                  setCheckPayment(true)
                }
              }}
            >
              <option value="SBI">SBI</option>
              <option value="ICICI">ICICI</option>
              <option value="Axis">Axis</option>
              <option value="BOI">BOI</option>
              <option value="PNB">PNB</option>
            </Select>
          ) : null}
          <Input
            type="text"
            value={gatewayID}
            placeholder={`Enter your ${gateway} Number`}
            onChange={({ target: { value } }) => {
              setGatewayID(value);
            }}
            // onChange={(e) => setGatewayID(e.target.value)}
          />
          <Button
            backgroundColor="rgb(255,111,97)"
            color="white"
            onClick={() => {
              if (gateway === "Net Banking" && bank === "") {
                toast({
                  title: "Please choose valid bank",
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                });
              } else if (gatewayID !== "") {
                setIsLoggedInToGateway(true);
                setCheckPayment(true)
              } else {
                toast({
                  title: "Invalid ID or Password",
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                });
              }
            }}
          >
            Login to {gateway}
          </Button>
        </VStack>
      )}
    </VStack>
  );
}
