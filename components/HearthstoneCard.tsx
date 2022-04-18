import {
  chakra,
  Box,
  Center,
  Flex,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IHearthstoneCard } from "../util/types/hearthstone.t";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function HearthstoneCard(props: IHearthstoneCard) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function CardImage() {
    return (
      <>
        <Box maxW={{ base: "15rem", md: "15rem" }} maxH={"xs"} onClick={onOpen}>
          <motion.div
            layoutId={props.slug}
            whileHover={{ scale: 1.03, cursor: "pointer" }}
            whileTap={{ scale: 0.96 }}
          >
            <Image src={props.image} alt="Hearthstone Card" draggable={false} />
          </motion.div>
        </Box>
      </>
    );
  }

  function CardModal() {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size={"6xl"} isCentered>
          <ModalOverlay bgColor={"blackAlpha.800"} />
          <ModalContent
            bgColor={"transparent"}
            shadow={"none"}
            mt={{ base: 150, md: 0 }}
            mx={{ base: 2, md: 0 }}
            rounded={"none"}
            alignItems={"center"}
          >
            <ModalCloseButton color={"white"} />
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Stack direction={{ base: "column", md: "row" }}>
                <Center>
                  <Box>
                    <Image
                      src={props.image}
                      alt="Hearthstone Card"
                      draggable={false}
                    />
                  </Box>
                </Center>
                <Center>
                  <VStack spacing={5} maxWidth={"40rem"}>
                    <Box>
                      <Text
                        color={"white"}
                        fontSize={{ base: "2xl", md: "4xl" }}
                        mb={3}
                      >
                        {props.name}
                      </Text>
                      <Text color={"gray.300"} fontSize={"lg"} mb={3}>
                        {props.flavorText}
                      </Text>
                      <Text
                        color={"white"}
                        fontSize={"lg"}
                        dangerouslySetInnerHTML={{__html: props.text}}
                        />
                      <List spacing={3} mt={10}>
                        <HSListItem
                          title="Type"
                          text={cardType(props.cardTypeId)}
                        />
                        <HSListItem
                          title="Rarity"
                          text={cardRarity(props.rarityId)}
                        />
                        <HSListItem
                          title="Class"
                          text={cardClass(props.classId)}
                        />
                        <HSListItem
                          title="Mana Cost"
                          text={props.manaCost.toString()}
                        />
                        {props.attack ? (
                          <HSListItem
                            title="Attack"
                            text={props.attack.toString()}
                          />
                        ) : null}
                        {props.health ? (
                          <HSListItem
                            title="Health"
                            text={props.health.toString()}
                          />
                        ) : null}
                        <HSListItem title="Artist" text={props.artistName} />
                      </List>
                    </Box>
                  </VStack>
                </Center>
              </Stack>
            </Flex>
          </ModalContent>
        </Modal>
      </>
    );
  }
  return (
    <>
      <Center>
        <CardImage />
        <CardModal />
      </Center>
    </>
  );
}

function HSListItem({
  title,
  text,
}: {
  title: string;
  text: string | undefined;
}) {
  return (
    <ListItem>
      <Flex display={"inline"}>
        <Text color={"white"}>
          <Text color={"orange.300"} display={"inline"}>
            {title}:{" "}
          </Text>
          {text}
        </Text>
      </Flex>
    </ListItem>
  );
}

function cardClass(cardClassId: number) {
  const cardClass = new Map<number, string>([
    [1, "Neutral"],
    [2, "Druid"],
    [3, "Hunter"],
    [4, "Mage"],
    [5, "Paladin"],
    [6, "Priest"],
    [7, "Rogue"],
    [8, "Shaman"],
    [9, "Warlock"],
    [10, "Warrier"],
    [12, "Neutral"],
    [14, "Demon Hunter"],
  ]);

  const convertedCardClass = cardClass.get(cardClassId);
  if (convertedCardClass === undefined) return;
  return convertedCardClass;
}

function cardType(cardTypeId: number) {
  const cardType = new Map<number, string>([
    [1, "Minion"],
    [2, "Weapon"],
    [3, "Hero"],
    [4, "Minion"],
    [5, "Spell"],
    [7, "Weapon"],
  ]);

  const convertedCardType = cardType.get(cardTypeId);
  if (convertedCardType === undefined) return;
  return convertedCardType;
}

function cardRarity(cardRarirtId: number) {
  const rarity = new Map<number, string>([
    [1, "Common"],
    [2, "Free"],
    [3, "Rare"],
    [4, "Epic"],
    [5, "Legendary"],
  ]);

  const convertedRarity = rarity.get(cardRarirtId);
  if (convertedRarity === undefined) return;
  return convertedRarity;
}
