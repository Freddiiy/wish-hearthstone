import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import HearthstoneCard from "../components/HearthstoneCard";
import { dummyCard, dummyCard2 } from "../components/HearthstoneCard";
import { HSCardsDb } from "../util/themes/tmpJsonDb/hearthstone.json";
import {
  IHearthstoneCard,
  IHearthstonePage,
} from "../util/themes/types/hearthstone.t";

const Home: NextPage = () => {
  const importedCards: IHearthstonePage = HSCardsDb;
  const cards = [dummyCard, dummyCard2, ...importedCards.cards];
  const [hsCards, SetHsCards] = useState<IHearthstoneCard[]>();
  useEffect(() => {
    function fetchCards() {}
  }, []);
  return (
    <>
      <Grid gap={4} column={2}>
        {cards.map((card, key) => (
          <HearthstoneCard key={key} {...card} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
