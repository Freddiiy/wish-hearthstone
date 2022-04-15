import React, {ReactNode} from "react";
import {
	Box,
	BoxProps,
	Button,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	IconButton,
	Input,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {getAll} from "../../util/themes/fetchCards/fetchCards";

const shellWidth = "80";

export default function Navbar({children}: {children: ReactNode}) {
	const {isOpen, onOpen, onClose} = useDisclosure();

	function NavItem({children}: {children: ReactNode}) {
		return (
			<Flex
				align="center"
				px="4"
				pl="4"
				py="3"
				cursor="pointer"
				color={"black"}
				_hover={{
					bg: "gray.100",
					color: "black",
				}}
				role="group"
				fontWeight="semibold"
				transition=".15s ease"
			>
				{children}
			</Flex>
		);
	}

	function SidebarContent(boxProps?: BoxProps) {
		return (
			<Box
				as="nav"
				pos="fixed"
				top="0"
				right="0"
				zIndex="sticky"
				h="full"
				pb="10"
				overflowX="hidden"
				overflowY="auto"
				bg={"white"}
				borderColor={"inherit"}
				borderLeftWidth="1px"
				w={shellWidth}
				{...boxProps}
			>
				<Flex px="4" py="5" align="center">
					<Text
						p={4}
						fontSize="lg"
						ml="2"
						color={"black"}
						fontWeight="semibold"
						bgColor={"gray.100"}
						rounded={"2xl"}
					>
						Wish-Hearthstone
					</Text>
				</Flex>
				<Flex
					direction="column"
					as="nav"
					fontSize="sm"
					color="gray.600"
					aria-label="Main Navigation"
				>
					<NavItem>
						<Text>Cock</Text>
					</NavItem>
					<NavItem>
						<Button onClick={() => getAll()}>Fetch cards</Button>
					</NavItem>
				</Flex>
			</Box>
		);
	}

	return (
		<>
			<Box as="section" bg={"gray.100"} minH="100vh">
				<Box mr={{base: 0, md: shellWidth}} transition=".3s ease">
					<SidebarContent display={{base: "none", md: "unset"}} />
					<Drawer isOpen={isOpen} onClose={onClose} placement="right">
						<DrawerOverlay />
						<DrawerContent>
							<SidebarContent w="full" borderRight="none" />
						</DrawerContent>
					</Drawer>
					<Box height={"20"}>
						<Flex
							zIndex={"dropdown"}
							as="header"
							align="center"
							justify="space-between"
							w="full"
							px="4"
							bg={"white"}
							borderBottomWidth="1px"
							borderColor="blackAlpha.300"
							h="14"
							position={"fixed"}
						>
							<Text color={"black"} fontSize={{base: "xl", md: "4xl"}}>
								WISH HEARTHSTONE
							</Text>
							<IconButton
								color={"black"}
								aria-label="Menu"
								display={{base: "flex", md: "none"}}
								onClick={onOpen}
								icon={<HamburgerIcon />}
								size="sm"
							/>
						</Flex>
					</Box>
					<Box as="main" p={4} pt={"20"}>
						{children}
					</Box>
				</Box>
			</Box>
		</>
	);
}
