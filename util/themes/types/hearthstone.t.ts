export interface IHearthstoneCard {
	id: number;
	collectible: number;
	slug: string;
	classId: number;
	multiClassIds?: any[];
    spellSchoolId?: number,
	cardTypeId: number;
	cardSetId: number;
	rarityId: number;
	artistName: string;
	health?: number;
	attack?: number;
	manaCost: number;
	name: string;
	text: string;
	image: string;
	imageGold: string;
	flavorText: string;
	cropImage: string;
	keywordIds: number[];
}