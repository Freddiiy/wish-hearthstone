import { Card, Col } from "react-bootstrap";
import Image from "next/image";

export interface IHearthstoneCard {
  id: number;
  collectible?: number;
  slug?: string;
  classId?: number;
  multiClassIds?: any[];
  cardTypeId?: number;
  cardSetId?: number;
  rarityId?: number;
  artistName?: string;
  health: number;
  attack: number;
  manaCost: number;
  name: string;
  text: string;
  image: string;
  imageGold?: string;
  flavorText: string;
  cropImage?: string;
  keywordIds?: number[];
}

export default function HearthstoneCard(props: IHearthstoneCard) {
  return (
    <div>
      <div className={"position-absolute bg-info rounded"}>
        <h1 className={"text-white p-3"}>{props.manaCost}</h1>
      </div>

      <div>
        <Image src={props.image} alt={""} height={250} width={250}/>
      </div>
    </div>
  );
}
