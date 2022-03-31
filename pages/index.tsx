import { HamburgerIcon } from "@chakra-ui/icons";
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
  IconButton,
  Input,
  InputRightElement,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useDebouncedValue } from "@mantine/hooks";
import axios from "axios";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import {
  ChangeEvent,
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import HearthstoneCard from "../components/HearthstoneCard";
import { dummyCard, dummyCard2 } from "../components/HearthstoneCard";
import {
  IHearthstoneCard,
  IHearthstonePage,
} from "../util/themes/types/hearthstone.t";

const Home: NextPage = () => {
  const [hsCards, SetHsCards] = useState<IHearthstoneCard[]>();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      const [debouncedValue] = useDebouncedValue<string>(inputValue, 400);

      useEffect(() => {
        if (debouncedValue === "") return;
        fetchQuery(debouncedValue);
      }, [debouncedValue]);

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
            <Input
              placeholder="Search for card..."
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
          </Flex>
        </Box>
      );
    }

    return (
      <>
        <Box as="section" bg={"gray.100"} minH="100vh">
          <SidebarContent display={{ base: "none", md: "unset" }} />
          <Drawer isOpen={isOpen} onClose={onClose} placement="left">
            <DrawerOverlay />
            <DrawerContent>
              <SidebarContent w="full" borderRight="none" />
            </DrawerContent>
          </Drawer>

          <Box ml={{ base: 0, md: "60" }} transition=".3s ease">
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
              <IconButton
                color={"black"}
                aria-label="Menu"
                display={{ base: "inline-flex", md: "none" }}
                onClick={onOpen}
                icon={<HamburgerIcon />}
                size="sm"
              />
              <Text color={"black"} fontSize={{ base: "xl", md: "4xl" }}>
                WISH HEARTHSTONE
              </Text>
            </Flex>
            <Box as="main" p={4} pt={"20"}>
              {children}
            </Box>
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
