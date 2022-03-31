import {Box, Flex, Text} from "@chakra-ui/react";

export default function Sidebar() {
	return (
		<Box
			as="nav"
			pos="fixed"
			top="0"
			left="0"
			zIndex="sticky"
			h="full"
			pb="10"
			overflowX="hidden"
			overflowY="auto"
			bg={"white"}
			borderColor={"inherit"}
			borderRightWidth="1px"
			w="60"
		>
			<Flex px="4" py="5" align="center">
				<Text fontSize="2xl" ml="2" color={"black"} fontWeight="semibold">
					Dillermand
				</Text>
			</Flex>
		</Box>
	);
}
