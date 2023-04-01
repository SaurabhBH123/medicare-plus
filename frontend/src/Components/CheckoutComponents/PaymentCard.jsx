import { VStack, HStack, Input, Checkbox, Heading } from "@chakra-ui/react";

import { useState, useEffect } from "react";


function isNumber(string) {
	return Number(string).toString() !== "NaN";
}

function isCardNumberValid(cardNumber) {
	return cardNumber.length === 12 && isNumber(cardNumber);
}

function isCardExpiryValid(cardExpiry) {
	return cardExpiry.length === 7 && cardExpiry.includes("/");
}

function isCardCVVValid(cardCVV) {
	return cardCVV.length === 3 && isNumber(cardCVV);
}

function isCardHolderValid(cardHolder) {
	return cardHolder.length > 0;
}

export default function PaymentCard({setCheckPayment}) {
	const [cardNumber, setCardNumber] = useState("");
	const [cardExpiry, setCardExpiry] = useState("");
	const [cardCVV, setCardCVV] = useState("");
	const [cardHolder, setCardHolder] = useState("");
	const [isCardValid, setIsCardValid] = useState(false);
	// const totalPayable = useSelector((state) => state.auth.totalPayable);

	function updateIsCardValid() {
		if (
			isCardNumberValid(cardNumber) &&
			isCardExpiryValid(cardExpiry) &&
			isCardCVVValid(cardCVV) &&
			isCardHolderValid(cardHolder)
		) {
			setIsCardValid(true);
			setCheckPayment(true)
		} else {
			setIsCardValid(false);
		}
	}

	useEffect(() => {
		updateIsCardValid();
	}, [cardNumber, cardExpiry, cardCVV, cardHolder]);

	return (
		<VStack>
			<HStack justifyContent="space-between">
				<span style={{ fontWeight: "bold" }}>100% Secure</span>
				
			</HStack>
			<Input
				type="number"
				placeholder="Enter 12 Digits Card Number "
				value={cardNumber}
				onChange={({ target: { value } }) => {
					setCardNumber(value);
				}}
			/>
			<VStack justifyContent="space-between" width="100%">
				<Input
					type="text"
					placeholder="Expiry Date (mm/yyyy)"
					value={cardExpiry}
					onChange={({ target: { value } }) => {
						if (
							value !== "" &&
							(value.length > 7 ||
								(isNumber(value[value.length - 1]) === false &&
									value[value.length - 1] !== "/"))
						) {
							return;
						}
						if (value.length > 2 && value.includes("/") === false) {
							value = value[0] + value[1] + "/" + value.substring(2);
						}
						setCardExpiry(value);
					}}
				/>
				<Input
					type="number"
					placeholder="CVV Number (3 digits)"
					value={cardCVV}
					onChange={({ target: { value } }) => {
						if (value.length > 3) {
							return;
						}
						setCardCVV(value);
					}}
				/>
			</VStack>
			<Input
				type="text"
				placeholder="Cardholder Name"
				value={cardHolder}
				onChange={({ target: { value } }) => setCardHolder(value)}
			/>
			<Checkbox defaultChecked>Secure this card as per RBI guidelinesLearn More</Checkbox>
			<br />
			{isCardValid && (
				<Heading fontSize="xl" color="orange.500" textAlign="center">
					Payment Done
					{/* Amount Rs. {totalPayable} will be sent to Lens Shop */}
				</Heading>
			)}
			<br />
			{/* <PlaceOrderButton isDisabled={isCardValid == false} /> */}
		</VStack>
	);
}
