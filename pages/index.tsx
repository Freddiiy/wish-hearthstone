import {
	Box,
	BoxProps,
	Button,
	Center,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	HStack,
	Input,
	InputRightElement,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import {
	AutoComplete,
	AutoCompleteInput,
	AutoCompleteItem,
	AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import axios from "axios";
import type {NextPage} from "next";
import {ReactNode, useEffect, useState} from "react";
import HearthstoneCard from "../components/HearthstoneCard";
import {dummyCard, dummyCard2} from "../components/HearthstoneCard";
import {HSCardsDb} from "../util/themes/tmpJsonDb/hearthstone.json";
import {
	IHearthstoneCard,
	IHearthstonePage,
} from "../util/themes/types/hearthstone.t";

const Home: NextPage = () => {
	const importedCards: IHearthstonePage = HSCardsDb;
	const cards = [dummyCard, dummyCard2, ...importedCards.cards];
	const [hsCards, SetHsCards] = useState<IHearthstoneCard[]>();
	const [inputValue, setInputValue] = useState<string>("");

	function handleSubmit() {
		if (inputValue.length < 1) return;
		fetchQuery(inputValue);
	}

	async function fetchQuery(query: string) {
		const response = await axios.get<IHearthstoneCard[]>(
			`/api/cards/${query}}`
		);
		const hsCards = await response.data;
		SetHsCards(hsCards);
	}
	useEffect(() => {
		function fetchCards() {}
	}, []);

	function AppShell({children}: {children: ReactNode}) {
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
		function SidebarContent(boxProps: BoxProps) {
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
							<FormControl>
								<AutoComplete
									openOnFocus
									emptyState={
										<Center>
											<Text color={"orange.300"}>No card like that</Text>
										</Center>
									}
									onChange={(value: string) => setInputValue(value)}
								>
									<AutoCompleteInput
										aria-label="No cards like that"
										variant={"filled"}
										_placeholder={{opacity: 1, color: "orange.300"}}
										textColor={"orange.300"}
										type={"text"}
										focusBorderColor={"orange.300"}
										value={inputValue}
										onChange={(event) => setInputValue(event.target.value)}
									/>
									<InputRightElement>
										<Button
											bgColor={"orange.300"}
											color={"white"}
											_hover={{
												color: "white",
												borderColor: "orange.400",
												backgroundColor: "orange.400",
											}}
											onClick={() => {
												if (inputValue.length < 1) return;
												fetchQuery(inputValue);
											}}
										>
											Søg
										</Button>
									</InputRightElement>
									<AutoCompleteList w={"full"} bgColor={"white"} shadow={"2xl"}>
										{typeof hsCards !== "undefined"
											? hsCards.map((card, key) => (
													<AutoCompleteItem
														color={"blue.200"}
														fontWeight={"xl"}
														key={key}
														value={card}
														_hover={{backgroundColor: "gray.100"}}
													>
														{card.name}
													</AutoCompleteItem>
											  ))
											: ""}
									</AutoCompleteList>
								</AutoComplete>
							</FormControl>
						</NavItem>
					</Flex>
				</Box>
			);
		}

		return (
			<>
				<Box as="section" bg={"gray.100"} minH="100vh">
					<SidebarContent display={{base: "none", md: "unset"}} />
					<Drawer>
						<DrawerOverlay />
						<DrawerContent>
							<SidebarContent />
						</DrawerContent>
					</Drawer>
					<Box as="main" p={4} ml={{base: 0, md: "60"}} transition={".3s ease"}>
						{children}
					</Box>
				</Box>
			</>
		);
	}
	return (
		<>
			<AppShell>
				<Grid
					templateColumns={{
						base: "repeat(2, 1fr)",
						sm: "repeat(2, 1fr)",
						md: "repeat(3, 1fr)",
						lg: "repeat(4, 1fr)",
						xl: "repeat(5, 1fr)",
					}}
					gap={4}
				>
					{cards.map((card, key) => (
						<HearthstoneCard key={key} {...card} />
					))}
				</Grid>
			</AppShell>
		</>
	);
};

export default Home;
