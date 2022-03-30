export interface IHearthstonePage {
	cards:     IHearthstoneCard[];
	cardCount: number;
	pageCount: number;
	page:      number;
}

export interface IHearthstoneCard {
	id:             number;
	collectible:    number;
	slug:           string;
	classId:        number;
	multiClassIds:  number[];
	spellSchoolId?: number;
	cardTypeId:     number;
	cardSetId:      number;
	rarityId:       number;
	artistName:     string;
	manaCost:       number;
	name:           string;
	text:           string;
	image:          string;
	imageGold:      string;
	flavorText:     string;
	cropImage:      string;
	keywordIds?:    number[];
	duels?:         Duels;
	health?:        number;
	attack?:        number;
	copyOfCardId?:  number;
	minionTypeId?:  number;
	childIds?:      number[];
}

export interface Duels {
	relevant:    boolean;
	constructed: boolean;
}