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
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import HearthstoneCard from "../components/HearthstoneCard";
import { dummyCard, dummyCard2 } from "../components/HearthstoneCard";
import {
  IHearthstoneCard,
  IHearthstonePage,
} from "../util/themes/types/hearthstone.t";

const Home: NextPage = () => {
  const [hsCards, SetHsCards] = useState<IHearthstoneCard[]>();

  const animationContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.02,
      },
    },
  };

  const animationItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  async function fetchQuery(query: string) {
    if (query === "") {
      const response = await axios.get<IHearthstonePage>(`/api/cards/`);
      const requestedCards = await response.data;
      SetHsCards(requestedCards.cards);
    } else {
      const response = await axios.get<IHearthstonePage>(`/api/cards/${query}`);
      const requestedCards = await response.data;
      SetHsCards(requestedCards.cards);
    }
  }

  useEffect(() => {
    async function fetchCards() {
      const response = await axios.get<IHearthstonePage>(`/api/cards/`);
      const requestedCards = await response.data;
      SetHsCards(requestedCards.cards);
    }
    fetchCards();
  }, []);

  function AppShell({ children }: { children: ReactNode }) {
    function NavItem({ children }: { children: ReactNode }) {
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
      const [inputValue, setInputValue] = useState<string>("");

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
              <FormControl onSubmit={() => fetchQuery(inputValue)}>
                <AutoComplete
                  openOnFocus
                  emptyState={
                    <Center>
                      <Text color={"orange.300"}>
                        {inputValue} returned nothing :(
                      </Text>
                    </Center>
                  }
                  onChange={(value: string) => setInputValue(value)}
                >
                  <AutoCompleteInput
                    aria-label="No cards like that"
                    variant={"filled"}
                    _placeholder={{ opacity: 1, color: "orange.300" }}
                    textColor={"orange.300"}
                    type={"search"}
                    focusBorderColor={"orange.300"}
                    value={inputValue}
                    onChange={(event: any) =>
                      setInputValue(event.currentTarget.value)
                    }
                  />
                  <Button
                    bgColor={"orange.300"}
                    color={"white"}
                    _hover={{
                      color: "white",
                      borderColor: "orange.400",
                      backgroundColor: "orange.400",
                    }}
                    onClick={() => {
                      fetchQuery(inputValue);
                    }}
                  >
                    Søg
                  </Button>
                  {/*
                  <AutoCompleteList w={"full"} bgColor={"white"} shadow={"2xl"}>
                    {typeof autocomplete !== "undefined"
                      ? autocomplete.map((card, key) => (
                          <AutoCompleteItem
                            color={"blue.200"}
                            fontWeight={"xl"}
                            key={key}
                            value={card.slug}
                            _hover={{ backgroundColor: "gray.100" }}
                          >
                            {card.name}
                          </AutoCompleteItem>
                        ))
                      : ""}
                  </AutoCompleteList>
                      */}
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
          <SidebarContent display={{ base: "none", md: "unset" }} />
          <Box
            as="main"
            p={4}
            ml={{ base: 0, md: "60" }}
            transition={".3s ease"}
          >
            {children}
          </Box>
        </Box>
      </>
    );
  }
  return (
    <>
      <AppShell>
        <motion.div
          initial={"hidden"}
          animate={"show"}
          variants={animationContainer}
        >
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
            {hsCards ? (
              hsCards.map((card, key) => (
                <motion.div key={key} variants={animationItem}>
                  <HearthstoneCard key={key} {...card} />
                </motion.div>
              ))
            ) : (
              <Text color={"black"}>No cards :(</Text>
            )}
          </Grid>
        </motion.div>
      </AppShell>
    </>
  );
};

export default Home;
