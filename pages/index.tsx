import {Grid, GridItem, SimpleGrid} from "@chakra-ui/react";
import type {NextPage} from "next";
import {useEffect, useState} from "react";
import HearthstoneCard from "../components/HearthstoneCard";

import {dummyCard, dummyCard2} from "../components/HearthstoneCard";
import {IHearthstoneCard} from "../util/themes/types/hearthstone.t";

const Home: NextPage = () => {
	const cards = [dummyCard, dummyCard2];
	const [hsCards, SetHsCards] = useState<IHearthstoneCard[]>();
	useEffect(() => {
		function fetchCards() {}
	}, []);
	return (
		<>
			<Grid gap={4}>
				{cards.map((card, key) => (
					<GridItem key={key} colSpan={4}>
						<HearthstoneCard key={key} {...card} />
					</GridItem>
				))}
			</Grid>
		</>
	);
};

export default Home;
