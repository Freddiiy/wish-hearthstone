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
import { IHearthstoneCard } from "../util/themes/types/hearthstone.t";
import { motion } from "framer-motion";

export default function HearthstoneCard(props: IHearthstoneCard) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function CardImage() {
    return (
      <>
        <Box maxW={{ base: "15rem", md: "15rem" }} maxH={"xs"} onClick={onOpen}>
          <motion.div
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
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"} isCentered>
          <ModalOverlay bgColor={"blackAlpha.800"} />
          <ModalContent
            bgColor={"transparent"}
            shadow={"none"}
            m={0}
            rounded={"none"}
            alignItems={"center"}
            py={{ base: 3, md: 20 }}
            px={{ baSE: 3, md: 20 }}
          >
            <ModalCloseButton />
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Stack direction={{ base: "column", md: "row" }}>
                <Center>
                  <Box>
                    <Image src={props.image} alt="Hearthstone Card" />
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
                        dangerouslySetInnerHTML={{ __html: props.text }}
                      ></Text>
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
    [1, "Free"],
    [2, "Common"],
    [3, "Rare"],
    [4, "Epic"],
    [5, "Legendary"],
  ]);

  const convertedRarity = rarity.get(cardRarirtId);
  if (convertedRarity === undefined) return;
  return convertedRarity;
}

export const dummyCard = {
  id: 52119,
  collectible: 1,
  slug: "52119-arch-villain-rafaam",
  classId: 9,
  multiClassIds: [],
  cardTypeId: 4,
  cardSetId: 1130,
  rarityId: 5,
  artistName: "Alex Horley Orlandelli",
  health: 8,
  attack: 7,
  manaCost: 7,
  name: "Arch-Villain Rafaam",
  text: "<b><b>Taunt</b> Battlecry:</b> Replace your hand and deck with <b>Legendary</b> minions.",
  image:
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6d36d48478cd253ada632922cc29cd6fece44dd5df5554837eeed2bc978f526d.png",
  imageGold:
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/400209c21f0d45a20ce67f3c95664fbd736c826fcb339895cb9215d94b714d2c.png",
  flavorText:
    "Minions must wash hands before being LIQUIDATED AND REPLACED BY SOMEONE BETTER.",
  cropImage:
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/88803effaa821c7d76f5f0c3b1fd044ba62a884dcc207cb318d32583986fe9a6.png",
  keywordIds: [1, 8],
};

export const dummyCard2 = {
  id: 38913,
  collectible: 1,
  slug: "38913-a-light-in-the-darkness",
  classId: 5,
  multiClassIds: [],
  spellSchoolId: 5,
  cardTypeId: 5,
  cardSetId: 21,
  rarityId: 1,
  artistName: "Zoltan Boros",
  manaCost: 2,
  name: "A Light in the Darkness",
  text: "<b>Discover</b> a minion. Give it +1/+1.",
  image:
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3e52c45971994b62bd90cf71adb97e583146760a45a2e283ba67a9557746c61a.png",
  imageGold: "",
  flavorText:
    "Wait, how can you have a light in the dark? If you turn on a light while it’s dark, doesn’t that mean it’s no longer dark?",
  cropImage:
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/289b8a4599a7119ddbe3abc1d767e12efbda64db3631936cda76dd8c8f651126.png",
  keywordIds: [21],
  duels: {
    relevant: true,
    constructed: true,
  },
};
