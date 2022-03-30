import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
      <HStack>
        <Box
          width={"16rem"}
          height={"100vh"}
          bgColor={"white"}
          position={"fixed"}
        >
          <Flex justifyContent={"center"}>
            <Text color={"white"} fontSize={"2xl"}>
              Dillermand
            </Text>
          </Flex>
        </Box>
        <Box>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(7, 1fr)",
            }}
            gap={4}
          >
            {cards.map((card, key) => (
              <HearthstoneCard key={key} {...card} />
            ))}
          </Grid>
        </Box>
      </HStack>
    </>
  );
};

export default Home;
