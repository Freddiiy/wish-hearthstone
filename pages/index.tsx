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
  Radio,
  RadioGroup,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  useDisclosure,
  Stack,
  Wrap,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import Pagination from "@choc-ui/paginator";
import { useDebouncedValue, usePagination } from "@mantine/hooks";
import { PaginationParams } from "@mantine/hooks/lib/use-pagination/use-pagination";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import {
  ChangeEvent,
  ChangeEventHandler,
  ReactNode,
  useContext,
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
      } else {
        const response = await axios.get<IHearthstonePage>(
          `/api/cards/${query}?p=${page}&hsClass=${hsClass}`
        );
        const requestedPage = await response.data;
        SetHsPage(requestedPage);
      }
    }

    fetchWithDebouced(debouncedValue, currentPage, hsClass);
  }, [debouncedValue, currentPage, hsClass]);

  function AppShell({ children }: { children: ReactNode }) {
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
          ></Flex>
        </Box>
      );
    }

    return (
      <>
        <Box as="section" bg={"gray.100"} minH="100vh">
          <Box ml={{ base: 0, md: "0" }} transition=".3s ease">
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
          py={{ base: 2, md: 20 }}
          mx={{ base: 2, md: 20 }}
          rounded={"2xl"}
        >
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
            onChange={(event: any) => setInputValue(event.currentTarget.value)}
          />
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
            </AnimatePresence>
          </Grid>
        </motion.div>
      </Box>
    </>
  );
};

export default Home;
