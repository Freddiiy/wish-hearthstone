import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Text,
  useDisclosure,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";
import { useDebouncedValue, usePagination } from "@mantine/hooks";
import { PaginationParams } from "@mantine/hooks/lib/use-pagination/use-pagination";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import HearthstoneCard from "../components/HearthstoneCard";
import {
  IHearthstoneCard,
  IHearthstonePage,
} from "../util/themes/types/hearthstone.t";

const Home: NextPage = () => {
  const [hsPage, SetHsPage] = useState<IHearthstonePage>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputValue, setInputValue] = useState<string>("");
  const [hsClass, setHsClass] = useState<string>("");
  const [debouncedValue] = useDebouncedValue<string>(inputValue, 400);

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
    exit: {
      transition: {
        duration: 0.3,
      },
      opacity: 0,
    },
  };

  useEffect(() => {
    async function fetchCards() {
      const response = await axios.get<IHearthstonePage>(`/api/cards/`);
      const requestedPage = await response.data;
      SetHsPage(requestedPage);
    }
    fetchCards();
  }, []);

  useEffect(() => {
    async function fetchWithDebouced(
      query: string,
      page: number,
      hsClass: string
    ) {
      if (query === "") {
        const response = await axios.get<IHearthstonePage>(
          `/api/cards/?p=${page}&hsClass=${hsClass}`
        );
        const requestedPage = await response.data;
        SetHsPage(requestedPage);
        if (requestedPage.pageCount < currentPage)
          setCurrentPage(requestedPage.pageCount);
      } else {
        const response = await axios.get<IHearthstonePage>(
          `/api/cards/${query}?p=${page}&hsClass=${hsClass}`
        );
        const requestedPage = await response.data;
        SetHsPage(requestedPage);
        if (requestedPage.pageCount < currentPage)
          setCurrentPage(requestedPage.pageCount);
      }
    }

    fetchWithDebouced(debouncedValue, currentPage, hsClass);
  }, [debouncedValue, currentPage, hsClass]);

  return (
    <>
      <Box as="section" bg={"gray.100"} minH="100vh" pb={"20"}>
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
            <Text color={"black"} fontSize={{ base: "xl", md: "4xl" }}>
              WISH HEARTHSTONE
            </Text>
          </Flex>
        </Box>
        <Box
          px={{ base: 2, md: 20 }}
          bgColor={"gray.300"}
          py={{ base: 2, md: 10 }}
          mx={{ base: 2, md: 20 }}
          rounded={"2xl"}
        >
          <Center>
            <Stack direction={{ base: "column", md: "row" }}>
              <VStack>
                <FormLabel>
                  <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    textColor={"yellow.600"}
                  >
                    Search for card name, ability, text etc..
                  </Text>
                </FormLabel>
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
              </VStack>
              <RadioGroup defaultValue="2" mt={"5"} onChange={setHsClass}>
                <Center>
                  <Grid
                    textColor={"yellow.500"}
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                    templateColumns={{
                      base: "repeat(2, 1fr)",
                      sm: "repeat(4, 1fr)",
                      md: "repeat(4, 1fr)",
                      lg: "repeat(4, 1fr)",
                      xl: "repeat(4, 1fr)",
                    }}
                    gap={4}
                  >
                    <Radio colorScheme="gray" value="">
                      Reset
                    </Radio>
                    <Radio colorScheme="gray" value="neutral">
                      Neutral
                    </Radio>
                    <Radio colorScheme="yellow" value="druid">
                      Druid
                    </Radio>
                    <Radio colorScheme="green" value="hunter">
                      Hunter
                    </Radio>
                    <Radio colorScheme="cyan" value="mage">
                      Mage
                    </Radio>
                    <Radio colorScheme="yellow" value="paladin">
                      Paladin
                    </Radio>
                    <Radio colorScheme="gray" value="preist">
                      Preist
                    </Radio>
                    <Radio colorScheme="blackAlpha" value="rogue">
                      Rogue
                    </Radio>
                    <Radio colorScheme="blue" value="shaman">
                      Shaman
                    </Radio>
                    <Radio colorScheme="purple" value="warlock">
                      Warlock
                    </Radio>
                    <Radio colorScheme="red" value="warrior">
                      Warrier
                    </Radio>
                    <Radio colorScheme="green" value="demonhunter">
                      Demon Hunter
                    </Radio>
                  </Grid>
                </Center>
              </RadioGroup>
            </Stack>
          </Center>
        </Box>
        <Flex
          w="full"
          bg={"gray.100"}
          p={"10"}
          alignItems="center"
          justifyContent="center"
        >
          <Pagination
            onChange={(page) => {
              setCurrentPage(page === undefined ? 1 : page);
            }}
            defaultCurrent={1}
            total={parseInt(hsPage?.pageCount + "0")}
            paginationProps={{ display: "flex" }}
            pageNeighbours={3}
            baseStyles={{ bg: "gray.400" }}
            activeStyles={{ bg: "yellow.600" }}
            hoverStyles={{ bg: "gray.600" }}
            rounded={"full"}
            responsive={{
              activePage: true,
              totalRender: true,
              fastBackward: false,
              fastForward: false,
              pageJumper: true,
              pageSize: true,
            }}
            size={"sm"}
          />
        </Flex>
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
            <AnimatePresence>
              {hsPage ? (
                hsPage.cards.map((card, key) => (
                  <motion.div key={card.id} variants={animationItem}>
                    <HearthstoneCard key={card.id} {...card} />
                  </motion.div>
                ))
              ) : (
                <Text textColor={"black"} fontSize={"4xl"} fontWeight={"bold"}>
                  Cards loading :)
                </Text>
              )}
              {hsPage?.cards.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                    },
                  }}
                >
                  <Text
                    textColor={"black"}
                    fontSize={"4xl"}
                    fontWeight={"bold"}
                    transition={".2sec"}
                  >
                    No cards were found :(
                  </Text>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Grid>
        </motion.div>
      </Box>
    </>
  );
};

export default Home;
