import { Button, useDisclosure, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderData } from "../../redux/OrderReducer/action";

export default function PlaceOrderButton({ isDisabled }) {
	console.log(isDisabled)
	const navigate = useNavigate();
	const {carts} = useSelector((state) => state.CartReducer);
	const dispatch = useDispatch()
	// const {token} = useContext(AuthContext)
	// console.log(carts)
	// const user = useSelector((state) => state.auth.user);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [orderStage, setOrderStage] = useState(0);
	const timer = null;

	const orderStages = [
		"Your order will be deliverd in 2-3 days",
	];

	const startOrderProcessing = () => {
		if (timer === null) {
			let timer = setInterval(() => {
				setOrderStage((orderStage) => {
					if (orderStage === orderStages.length - 1) {
						onClose();
						clearInterval(timer);
						navigate("/");
					} else {
						return orderStage ;
					}
				});
			}, 2000);
		}
	};

	const handleAdd = ()=>{
		dispatch(addOrderData(carts))
	}
	return (
		<>
			<Button
				bgColor="rgb(255,111,97)"
				color={'white'}
				padding="25px 50px"
				isDisabled={!isDisabled}
				onClick={() => {
					handleAdd()
					onOpen();
					startOrderProcessing();
				}}
			>
				Place Order
			</Button>
			<Modal
				isCentered
				isOpen={isOpen}
				onClose={onClose}
				motionPreset="slideInBottom"
				closeOnOverlayClick={false}
			>
				<ModalOverlay bg="none" backdropFilter="auto" backdropBlur="10px" />;
				<ModalContent>
					<ModalHeader>
						<Text fontWeight="bold" fontSize="3xl">
							Processing order
						</Text>
					</ModalHeader>
					<ModalBody>
						<Text fontSize="xl" color="green" textAlign="center">
							{orderStages[orderStage]}
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose} isDisabled={true}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
