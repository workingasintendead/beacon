import { Transaction } from '../../app/interfaces/index';

export default function transactionResponse(transactionId: string | undefined): Transaction {
    return transactionStubs.find(transaction => transaction.transactionId === transactionId) ?? transactionStubs[0];
}

export function transactionList(): Transaction[] {
    return transactionStubs;
}

const transactionStubs: Transaction[] = [
    {
      "transactionId": "3d2f8425-e5e0-4330-b81f-c416c63b53da",
      "characterId": "94e5a47b-9949-4d07-85fe-54810c1c5db2",
      "slot": "front paws",
      "class": ["dog knight", "warrior"],
      "meta_data": [
        { "name": "strength", "value": "15" },
        { "name": "stamina", "value": "12" }
      ],
      "title": "Dumb Dog Boots",
      "description": "Some boots for a dumb dog",
      "min_bid_gold": 69,
      "min_bid_silver": 420,
      "min_bid_copper": null,
      "created_at": "2025-01-21T21:56:04+00:00"
    },
    {
      "transactionId": "28cbfbb4-c38b-4b8f-9cc3-13f62d2d8b19",
      "characterId": "1d62aee9-fd7f-40c3-a589-c7f6fe3f7c3f",
      "slot": "tail",
      "class": ["cat mage", "sorcerer"],
      "meta_data": [
        { "name": "strength", "value": "20" },
        { "name": "intelligence", "value": "35" }
      ],
      "title": "Mystic Cat Tail",
      "description": "A magical tail for a cat wizard",
      "min_bid_gold": 120,
      "min_bid_silver": 350,
      "min_bid_copper": 20,
      "created_at": "2025-01-22T09:30:15+00:00"
    },
    {
      "transactionId": "582e9431-d007-40e4-9307-c0f54e58c9a7",
      "characterId": "bd7a50bc-25bb-4b5e-bb0f-5a5d9c9996b0",
      "slot": "quiver",
      "class": ["elf archer", "scout"],
      "meta_data": [
        { "name": "agility", "value": "30" },
        { "name": "precision", "value": "25" }
      ],
      "title": "Enchanted Quiver",
      "description": "A quiver full of enchanted arrows",
      "min_bid_gold": 150,
      "min_bid_silver": 200,
      "min_bid_copper": 50,
      "created_at": "2025-01-22T14:10:50+00:00"
    },
    {
      "transactionId": "1f587e94-bdbb-467e-bfa0-35e5a70b4b88",
      "characterId": "fc54d292-9a59-4de4-bfa4-d25664365ea9",
      "slot": "shoulder",
      "class": ["orc warrior", "tank"],
      "meta_data": [
        { "name": "strength", "value": "40" },
        { "name": "durability", "value": "30" }
      ],
      "title": "Orc Shoulder Plate",
      "description": "A sturdy shoulder plate for an orc warrior",
      "min_bid_gold": 200,
      "min_bid_silver": 150,
      "min_bid_copper": 100,
      "created_at": "2025-01-23T11:20:03+00:00"
    },
    {
      "transactionId": "420c013b-8c78-46ff-9be6-bc1d54cc8cd1",
      "characterId": "a0b23c28-d6f0-43f9-846f-e8c45f64cd7d",
      "slot": "staff",
      "class": ["human cleric", "healer"],
      "meta_data": [
        { "name": "healing power", "value": "50" },
        { "name": "mana", "value": "40" }
      ],
      "title": "Healing Staff",
      "description": "A staff imbued with healing magic",
      "min_bid_gold": 300,
      "min_bid_silver": 100,
      "min_bid_copper": null,
      "created_at": "2025-01-23T15:45:27+00:00"
    },
    {
      "transactionId": "c9bc2d97-b8f2-4297-b2f1-61bc941ed017",
      "characterId": "e388f1cc-68c5-4063-9c99-8c4ab7e8c5f9",
      "slot": "helmet",
      "class": ["dwarf engineer", "builder"],
      "meta_data": [
        { "name": "reinforcement", "value": "80" },
        { "name": "stamina", "value": "60" }
      ],
      "title": "Dwarf Engineer Helmet",
      "description": "A sturdy helmet crafted for a dwarf engineer",
      "min_bid_gold": 50,
      "min_bid_silver": 75,
      "min_bid_copper": 20,
      "created_at": "2025-01-24T10:00:30+00:00"
    },
    {
      "transactionId": "02194c50-4f60-4bfe-bf1a-6cbf87b51c75",
      "characterId": "c4c56d75-bae7-49e0-9d92-77469a7b5b3f",
      "slot": "cloak",
      "class": ["vampire lord", "necromancer"],
      "meta_data": [
        { "name": "blood magic", "value": "100" },
        { "name": "stealth", "value": "90" }
      ],
      "title": "Vampire's Cloak",
      "description": "A cloak that enhances the vampire's powers",
      "min_bid_gold": 500,
      "min_bid_silver": 50,
      "min_bid_copper": 10,
      "created_at": "2025-01-24T12:55:13+00:00"
    },
    {
      "transactionId": "9b2c9bc4-68fc-4b2f-bf7e-b36ae5be68a7",
      "characterId": "0c3d34b5-2d61-4517-b09d-957ba9c3c19a",
      "slot": "boots",
      "class": ["goblin rogue", "thief"],
      "meta_data": [
        { "name": "stealth", "value": "70" },
        { "name": "dexterity", "value": "50" }
      ],
      "title": "Goblin Stealth Boots",
      "description": "Boots that allow a goblin rogue to move silently",
      "min_bid_gold": 75,
      "min_bid_silver": 60,
      "min_bid_copper": null,
      "created_at": "2025-01-24T14:30:01+00:00"
    },
    {
      "transactionId": "799f6d3f-8e1b-4bfa-b8fa-bda7b48ef6c1",
      "characterId": "11830f09-b0a9-4281-9a57-b74635f40c45",
      "slot": "ring",
      "class": ["elf sorcerer", "mage"],
      "meta_data": [
        { "name": "magic power", "value": "200" },
        { "name": "mana regeneration", "value": "100" }
      ],
      "title": "Ring of Mana",
      "description": "A ring that amplifies magical power",
      "min_bid_gold": 250,
      "min_bid_silver": 500,
      "min_bid_copper": null,
      "created_at": "2025-01-25T09:00:00+00:00"
    },
    {
      "transactionId": "3b64a3d0-f60c-4b25-b679-072f2d090609",
      "characterId": "ed8f9a93-f9a9-496f-848d-4420f1858f64",
      "slot": "flute",
      "class": ["mermaid bard", "musician"],
      "meta_data": [
        { "name": "melody", "value": "80" },
        { "name": "charm", "value": "60" }
      ],
      "title": "Bard's Melody Flute",
      "description": "A magical flute that produces soothing music",
      "min_bid_gold": 100,
      "min_bid_silver": 150,
      "min_bid_copper": 30,
      "created_at": "2025-01-25T11:10:45+00:00"
    }
  ];
