import { Box } from "@chakra-ui/react";

export interface IHearthstoneCard {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds?: any[];
  cardTypeId: number;
  cardSetId: number;
  rarityId: number;
  artistName: string;
  health: number;
  attack: number;
  manaCost: number;
  name: string;
  text: string;
  image: string;
  imageGold: string;
  flavorText: string;
  cropImage: string;
  keywordIds: number[];
}

export default function HearthstoneCard(props: IHearthstoneCard) {
  return <></>;
}

function CardImage() {
  return (
    <>
      <Box p={2} w={20} bgColor={"blue.200"}></Box>
    </>
  );
}
