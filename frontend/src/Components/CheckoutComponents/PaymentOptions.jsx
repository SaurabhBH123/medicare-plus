import { Stack, VStack, HStack } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";

import PaymentCard from "./PaymentCard";
import PaymentGateway from "./PaymentGateway";
import { useState } from "react";

export default function PaymentOptions({ setCheckPayment }) {
  const paymentOptions = [
    "Debit card",
    "Phone Pe",
    "Net Banking",
    "UPI QR Code",
    "Paytm",
    "Google Pay",
  ];
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50", "yellow.50", "green.50", "orange.50"],
    ["red.900", "teal.900", "blue.900", "yellow.900", "green.900", "orange.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Tabs variant="enclosed" onChange={(index) => setTabIndex(index)} bg={bg}>
      <HStack alignItems="stretch" py={"40px"}>
        <TabList>
          <VStack
            spacing={3}
            alignItems="stretch"
            width="150px"
            border={"0px solid green"}
          >
            {paymentOptions.map((paymentOption) => (
              <Tab
                fontWeight={500}
                fontSize={"16px"}
                key={paymentOption}
                backgroundColor="white"
                color="rgb(255,111,97)"
                padding="2px"
                _selected={{
                  backgroundColor: "rgb(255,111,97)",
                  color: "white",
                  border: "0px solid gray",
                }}
              >
                {paymentOption}
              </Tab>
            ))}
          </VStack>
        </TabList>

        <TabPanels border={"0px solid blue"} widht={"300px"}>
          <TabPanel as={VStack} spacing={1} height="100%" padding="0px">
            <PaymentCard setCheckPayment={setCheckPayment}/>
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[1]} setCheckPayment={setCheckPayment} />
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[2]} setCheckPayment={setCheckPayment} />
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[3]} setCheckPayment={setCheckPayment} />
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[4]} setCheckPayment={setCheckPayment} />
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[5]} setCheckPayment={setCheckPayment} />
          </TabPanel>
        </TabPanels>
      </HStack>
    </Tabs>
  );
}
