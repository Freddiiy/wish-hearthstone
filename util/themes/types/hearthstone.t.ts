export interface ICardSet {
    basic:                     Basic[];
    classic:                   IHearthstoneCard[];
    hallOfFame:                IHearthstoneCard[];
    missions:                  IHearthstoneCard[];
    demo:                      any[];
    system:                    any[];
    debug:                     any[];
    promo:                     any[];
    naxxramas:                 IHearthstoneCard[];
    goblinsVsGnomes:           IHearthstoneCard[];
    blackrockMountain:         IHearthstoneCard[];
    theGrandTournament:        IHearthstoneCard[];
    credits:                   Credit[];
    heroSkins:                 IHearthstoneCard[];
    tavernBrawl:               IHearthstoneCard[];
    theLeagueOfExplorers:      IHearthstoneCard[];
    whispersOfTheOldGods:      IHearthstoneCard[];
    oneNightInKarazhan:        IHearthstoneCard[];
    meanStreetsOfGadgetzan:    IHearthstoneCard[];
    journeyToUnGoro:           IHearthstoneCard[];
    knightsOfTheFrozenThrone:  IHearthstoneCard[];
    koboldsCatacombs:          IHearthstoneCard[];
    theWitchwood:              IHearthstoneCard[];
    theBoomsdayProject:        IHearthstoneCard[];
    rastakhanSRumble:          IHearthstoneCard[];
    riseOfShadows:             IHearthstoneCard[];
    tavernsOfTime:             IHearthstoneCard[];
    saviorsOfUldum:            IHearthstoneCard[];
    descentOfDragons:          IHearthstoneCard[];
    galakrondSAwakening:       IHearthstoneCard[];
    ashesOfOutland:            IHearthstoneCard[];
    wildEvent:                 any[];
    scholomanceAcademy:        IHearthstoneCard[];
    battlegrounds:             IHearthstoneCard[];
    demonHunterInitiate:       IHearthstoneCard[];
    madnessAtTheDarkmoonFaire: IHearthstoneCard[];
    forgedInTheBarrens:        IHearthstoneCard[];
    legacy:                    IHearthstoneCard[];
    core:                      IHearthstoneCard[];
    vanilla:                   IHearthstoneCard[];
    wailingCaverns:            any[];
    unitedInStormwind:         IHearthstoneCard[];
    mercenaries:               IHearthstoneCard[];
    fracturedInAlteracValley:  IHearthstoneCard[];
    voyageToTheSunkenCity:     IHearthstoneCard[];
    unknown:                   IHearthstoneCard[];
}

export interface IHearthstoneCard {
    cardID:           string;
    dbfID:            string;
    name:             string;
    cardSet:          CardSet;
    type?:            Type;
    text?:            string;
    playerClass?:     PlayerClass;
    locale:           Locale;
    rarity?:          Rarity;
    health?:          number;
    mechanics?:       Mechanic[];
    faction?:         Faction;
    elite?:           boolean;
    cost?:            number;
    attack?:          number;
    race?:            Race;
    img?:             string;
    flavor?:          string;
    artist?:          string;
    spellSchool?:     SpellSchool;
    collectible?:     boolean;
    imgGold?:         string;
    durability?:      number;
    howToGetGold?:    string;
    howToGet?:        string;
    armor?:           string;
    classes?:         PlayerClass[];
    multiClassGroup?: string;
    howToGetDiamond?: string;
}

export enum CardSet {
    AshesOfOutland = "Ashes of Outland",
    Battlegrounds = "Battlegrounds",
    BlackrockMountain = "Blackrock Mountain",
    Classic = "Classic",
    Core = "Core",
    DemonHunterInitiate = "Demon Hunter Initiate",
    DescentOfDragons = "Descent of Dragons",
    ForgedInTheBarrens = "Forged in the Barrens",
    FracturedInAlteracValley = "Fractured in Alterac Valley",
    GalakrondSAwakening = "Galakrond's Awakening",
    GoblinsVsGnomes = "Goblins vs Gnomes",
    HallOfFame = "Hall of Fame",
    HeroSkins = "Hero Skins",
    JourneyToUnGoro = "Journey to Un'Goro",
    KnightsOfTheFrozenThrone = "Knights of the Frozen Throne",
    KoboldsCatacombs = "Kobolds & Catacombs",
    Legacy = "Legacy",
    MadnessAtTheDarkmoonFaire = "Madness At The Darkmoon Faire",
    MeanStreetsOfGadgetzan = "Mean Streets of Gadgetzan",
    Mercenaries = "Mercenaries",
    Missions = "Missions",
    Naxxramas = "Naxxramas",
    OneNightInKarazhan = "One Night in Karazhan",
    RastakhanSRumble = "Rastakhan's Rumble",
    RiseOfShadows = "Rise of Shadows",
    SaviorsOfUldum = "Saviors of Uldum",
    ScholomanceAcademy = "Scholomance Academy",
    TavernBrawl = "Tavern Brawl",
    TavernsOfTime = "Taverns of Time",
    TheBoomsdayProject = "The Boomsday Project",
    TheGrandTournament = "The Grand Tournament",
    TheLeagueOfExplorers = "The League of Explorers",
    TheWitchwood = "The Witchwood",
    UnitedInStormwind = "United in Stormwind",
    Unknown = "Unknown",
    Vanilla = "Vanilla",
    VoyageToTheSunkenCity = "Voyage to the Sunken City",
    WhispersOfTheOldGods = "Whispers of the Old Gods",
}

export enum PlayerClass {
    DeathKnight = "Death Knight",
    DemonHunter = "Demon Hunter",
    Dream = "Dream",
    Druid = "Druid",
    Hunter = "Hunter",
    Mage = "Mage",
    Neutral = "Neutral",
    Paladin = "Paladin",
    Priest = "Priest",
    Rogue = "Rogue",
    Shaman = "Shaman",
    Warlock = "Warlock",
    Warrior = "Warrior",
    Whizbang = "Whizbang",
}

export enum Faction {
    Alliance = "Alliance",
    Horde = "Horde",
    Neutral = "Neutral",
}

export enum Locale {
    EnUS = "enUS",
}

export interface Mechanic {
    name: Name;
}

export enum Name {
    AIMustPlay = "AIMustPlay",
    Adapt = "Adapt",
    AdjacentBuff = "AdjacentBuff",
    AffectedBySpellPower = "AffectedBySpellPower",
    Aura = "Aura",
    AvengeX = "Avenge (X)",
    Battlecry = "Battlecry",
    BloodGem = "Blood Gem",
    CastsWhenDrawn = "Casts When Drawn",
    Charge = "Charge",
    ColossalX = "Colossal +X",
    Combo = "Combo",
    Corrupt = "Corrupt",
    Deathrattle = "Deathrattle",
    Discover = "Discover",
    DivineShield = "Divine Shield",
    Dredge = "Dredge",
    Echo = "Echo",
    Freeze = "Freeze",
    Frenzy = "Frenzy",
    HonorableKill = "Honorable Kill",
    ImmuneToSpellpower = "ImmuneToSpellpower",
    Inspire = "Inspire",
    InvisibleDeathrattle = "InvisibleDeathrattle",
    Invoke = "Invoke",
    JadeGolem = "Jade Golem",
    Lifesteal = "Lifesteal",
    Magnetic = "Magnetic",
    Morph = "Morph",
    NatureSpellDamage = "Nature Spell Damage",
    OneTurnEffect = "OneTurnEffect",
    Outcast = "Outcast",
    Overkill = "Overkill",
    Overload = "Overload",
    Poisonous = "Poisonous",
    Quest = "Quest",
    Questline = "Questline",
    Reborn = "Reborn",
    Recruit = "Recruit",
    Rush = "Rush",
    Secret = "Secret",
    Sidequest = "Sidequest",
    Silence = "Silence",
    SpellDamage = "Spell Damage",
    Spellburst = "Spellburst",
    Stealth = "Stealth",
    Summoned = "Summoned",
    Taunt = "Taunt",
    Tradeable = "Tradeable",
    Twinspell = "Twinspell",
    Windfury = "Windfury",
}

export enum Race {
    All = "All",
    Beast = "Beast",
    Demon = "Demon",
    Dragon = "Dragon",
    Elemental = "Elemental",
    Mech = "Mech",
    Murloc = "Murloc",
    Pirate = "Pirate",
    Quilboar = "Quilboar",
    Totem = "Totem",
}

export enum Rarity {
    Common = "Common",
    Epic = "Epic",
    Free = "Free",
    Legendary = "Legendary",
    Rare = "Rare",
}

export enum SpellSchool {
    Arcane = "Arcane",
    Fel = "Fel",
    Fire = "Fire",
    Frost = "Frost",
    Holy = "Holy",
    Nature = "Nature",
    Shadow = "Shadow",
}

export enum Type {
    Enchantment = "Enchantment",
    Hero = "Hero",
    HeroPower = "Hero Power",
    Minion = "Minion",
    Spell = "Spell",
    Weapon = "Weapon",
}

export interface Basic {
    cardID:      string;
    dbfID:       string;
    name:        string;
    cardSet:     string;
    type:        Type;
    faction?:    PlayerClass;
    rarity?:     Rarity;
    cost:        number;
    text:        string;
    playerClass: PlayerClass;
    locale:      Locale;
}

export interface Credit {
    cardID:      string;
    dbfID:       string;
    name:        string;
    cardSet:     CreditCardSet;
    type:        Type;
    rarity:      Rarity;
    cost:        number;
    attack:      number;
    health:      number;
    text:        string;
    elite:       boolean;
    playerClass: PlayerClass;
    locale:      Locale;
    race?:       Race;
    mechanics?:  Mechanic[];
}

export enum CreditCardSet {
    Credits = "Credits",
}
