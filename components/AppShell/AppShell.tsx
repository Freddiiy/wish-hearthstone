import {
	Box,
	BoxProps,
	Flex,
	HStack,
	Text,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerOverlay,
	DrawerContent,
	HTMLChakraProps,
} from "@chakra-ui/react";
import {ReactNode} from "react";

export default function AppShell({
	navItem,
	children,
}: {
	navItem?: ReactNode;
	children: ReactNode;
}) {
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
	function SidebarContent({navItems}: {navItems: ReactNode}) {
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
				display={{base: "none", md: "unset"}}
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
					<NavItem>{navItems}</NavItem>
				</Flex>
			</Box>
		);
	}

	function MobileContent() {
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
				borderRight={"none"}
				w="full"
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
				</Flex>
			</Box>
		);
	}
	return (
		<>
			<Box as="section" bg={"gray.100"} minH="100vh">
				<SidebarContent navItems={navItem} />
				<Drawer>
					<DrawerOverlay />
					<DrawerContent>
						<MobileContent />
					</DrawerContent>
				</Drawer>
				<Box as="main" p={4} ml={{base: 0, md: "60"}} transition={".3s ease"}>
					{children}
				</Box>
			</Box>
		</>
	);
}
