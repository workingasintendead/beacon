import { Transaction } from '../../app/interfaces/index';

export default function transactionResponse(transactionId: string | undefined): Transaction {
    return transactionStubs.find(transaction => transaction.transactionId === transactionId) ?? transactionStubs[0];
}

const transactionStubs: Transaction[] = [
    {
        "transactionId": "5f4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1b",
        "charId": "1f4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1c",
        "slot": "legs",
        "class": ["warrior", "paladin"],
        "metaData": [
            {
                "name": "strength",
                "value": 10
            },
            {
                "name": "stamina",
                "value": 10
            }
        ],
        "text": "Epic legplates for warriors and paladins, boosts strength and stamina! Get ready to tank like a boss!",
        "minBid": {
            "gold": 100,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "6a4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1d",
        "charId": "2a4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1e",
        "slot": "head",
        "class": ["mage", "warlock"],
        "metaData": [
            {
                "name": "intellect",
                "value": 15
            },
            {
                "name": "spirit",
                "value": 5
            }
        ],
        "text": "Mystical headpiece for mages and warlocks, +15 intellect! Cast spells like a pro!",
        "minBid": {
            "gold": 200,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "7b4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1f",
        "charId": "3b4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1g",
        "slot": "chest",
        "class": ["druid", "shaman"],
        "metaData": [
            {
                "name": "agility",
                "value": 12
            },
            {
                "name": "stamina",
                "value": 8
            }
        ],
        "text": "Chestpiece with agility and stamina, perfect for druids and shamans! Stay nimble and tough!",
        "minBid": {
            "gold": 150,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "8c4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1h",
        "charId": "4c4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1i",
        "slot": "feet",
        "class": ["hunter", "rogue"],
        "metaData": [
            {
                "name": "agility",
                "value": 14
            },
            {
                "name": "stamina",
                "value": 6
            }
        ],
        "text": "Swift boots for hunters and rogues, +14 agility! Run circles around your enemies!",
        "minBid": {
            "gold": 120,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "9d4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1j",
        "charId": "5d4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1k",
        "slot": "hands",
        "class": ["priest", "paladin"],
        "metaData": [
            {
                "name": "intellect",
                "value": 13
            },
            {
                "name": "spirit",
                "value": 7
            }
        ],
        "text": "Gloves that boost intellect and spirit for priests and paladins! Heal and smite with ease!",
        "minBid": {
            "gold": 180,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "0e4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1l",
        "charId": "6e4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1m",
        "slot": "shoulders",
        "class": ["warrior", "druid"],
        "metaData": [
            {
                "name": "strength",
                "value": 11
            },
            {
                "name": "stamina",
                "value": 9
            }
        ],
        "text": "Shoulder pads with strength and stamina for warriors and druids! Take hits like a champ!",
        "minBid": {
            "gold": 160,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "1f4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1n",
        "charId": "7f4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1o",
        "slot": "waist",
        "class": ["mage", "warlock"],
        "metaData": [
            {
                "name": "intellect",
                "value": 14
            },
            {
                "name": "spirit",
                "value": 6
            }
        ],
        "text": "Belt with +14 intellect for mages and warlocks! Cast spells like a pro!",
        "minBid": {
            "gold": 140,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "2g4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1p",
        "charId": "8g4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1q",
        "slot": "wrists",
        "class": ["hunter", "rogue"],
        "metaData": [
            {
                "name": "agility",
                "value": 13
            },
            {
                "name": "stamina",
                "value": 7
            }
        ],
        "text": "Bracers with +13 agility for hunters and rogues! Stay quick and deadly!",
        "minBid": {
            "gold": 130,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "3h4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1r",
        "charId": "9h4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1s",
        "slot": "back",
        "class": ["priest", "paladin"],
        "metaData": [
            {
                "name": "intellect",
                "value": 12
            },
            {
                "name": "spirit",
                "value": 8
            }
        ],
        "text": "Cloak with +12 intellect for priests and paladins! Look cool while you heal!",
        "minBid": {
            "gold": 170,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "4i4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1t",
        "charId": "0i4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1u",
        "slot": "neck",
        "class": ["warrior", "druid"],
        "metaData": [
            {
                "name": "strength",
                "value": 10
            },
            {
                "name": "stamina",
                "value": 10
            }
        ],
        "text": "Necklace with +10 strength and stamina for warriors and druids! Show off your power!",
        "minBid": {
            "gold": 110,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "5j4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1v",
        "charId": "1j4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1w",
        "slot": "finger",
        "class": ["mage", "warlock"],
        "metaData": [
            {
                "name": "intellect",
                "value": 11
            },
            {
                "name": "spirit",
                "value": 9
            }
        ],
        "text": "Ring with +11 intellect for mages and warlocks! Cast spells like a pro!",
        "minBid": {
            "gold": 190,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "6k4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1x",
        "charId": "2k4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1y",
        "slot": "trinket",
        "class": ["hunter", "rogue"],
        "metaData": [
            {
                "name": "agility",
                "value": 15
            },
            {
                "name": "stamina",
                "value": 5
            }
        ],
        "text": "Trinket with +15 agility for hunters and rogues! Stay quick and deadly!",
        "minBid": {
            "gold": 210,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "7l4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1z",
        "charId": "3l4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1a",
        "slot": "main hand",
        "class": ["priest", "paladin"],
        "metaData": [
            {
                "name": "intellect",
                "value": 14
            },
            {
                "name": "spirit",
                "value": 6
            }
        ],
        "text": "Main hand weapon with +14 intellect for priests and paladins! Heal and smite with ease!",
        "minBid": {
            "gold": 220,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "8m4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1b",
        "charId": "4m4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1c",
        "slot": "off hand",
        "class": ["warrior", "druid"],
        "metaData": [
            {
                "name": "strength",
                "value": 13
            },
            {
                "name": "stamina",
                "value": 7
            }
        ],
        "text": "Off hand weapon with +13 strength for warriors and druids! Take hits like a champ!",
        "minBid": {
            "gold": 230,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "9n4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1d",
        "charId": "5n4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1e",
        "slot": "ranged",
        "class": ["mage", "warlock"],
        "metaData": [
            {
                "name": "intellect",
                "value": 15
            },
            {
                "name": "spirit",
                "value": 5
            }
        ],
        "text": "Ranged weapon with +15 intellect for mages and warlocks! Cast spells like a pro!",
        "minBid": {
            "gold": 240,
            "silver": 0,
            "copper": 0
        }
    },
    {
        "transactionId": "0o4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1f",
        "charId": "6o4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1g",
        "slot": "two hand",
        "class": ["hunter", "rogue"],
        "metaData": [
            {
                "name": "agility",
                "value": 12
            },
            {
                "name": "stamina",
                "value": 8
            }
        ],
        "text": "Two-handed weapon with +12 agility for hunters and rogues! Smash your foes!",
        "minBid": {
            "gold": 250,
            "silver": 0,
            "copper": 0
        }
    }
];
