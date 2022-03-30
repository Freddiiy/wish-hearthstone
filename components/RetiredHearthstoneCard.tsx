export {};
/*
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

export default function RetiredHearthstoneCard(props: IHearthstoneCard) {
  return (
    <>
      <div
        style={{ width: "14rem" }}
        className={"bg-hearthstone border border-2 border-dark rounded-bottom"}
      >
        <Mana mana={props.manaCost} />
        <ImageSection imgsrc={props.image} />
        <Name cardTitle={props.name} />
        <Text cardText={props.text} />
        <CardBody attack={props.attack} health={props.health} />
      </div>
    </>
  );
}

function CardBody({ attack, health }: { attack: number; health: number }) {
  return (
    <>
      <Row>
        <Col>
          <Attack attack={attack} />
        </Col>
        <Col />
        <Col>
          <Health health={health} />
        </Col>
      </Row>
    </>
  );
}

function Mana({ mana }: { mana: number }) {
  return (
    <>
      <div className={"mb-0 position-relative bg-mana rounded"}>
        <h2 className={"text-white p-3"}>{mana}</h2>
      </div>
    </>
  );
}

function ImageSection({ imgsrc }: { imgsrc: string }) {
  return (
    <>
      <div>
        <Image
          src={imgsrc}
          alt={"Image did not load :("}
          height={200}
          width={200}
          layout={"responsive"}
        />
      </div>
    </>
  );
}

function Name({ cardTitle }: { cardTitle: string }) {
  return (
    <>
      <h3 className={"text-center"}>{cardTitle}</h3>
    </>
  );
}

function Text({ cardText }: { cardText: string }) {
  return (
    <>
      <div className={"rounded border border-1 border-dark mx-3 px-2 mb-3"}>
        <p>{cardText}</p>
      </div>
    </>
  );
}

function Attack({ attack }: { attack: number }) {
  return (
    <>
      <div className={"rounded-circle bg-attack text-center text-white m-1"}>
        <h3 className={"p-2"}>{attack}</h3>
      </div>
    </>
  );
}

function Health({ health }: { health: number }) {
  return (
    <>
      <div className={"rounded-circle bg-health text-center text-white m-1"}>
        <h3 className={"p-2"}>{health}</h3>
      </div>
    </>
  );
}
*/
