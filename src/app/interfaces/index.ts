export interface Transaction {
    transactionId: string;
    characterId: string;
    slot: string;
    class: string[];
    meta_data: { name: string; value: string }[];
    title: string;
    description: string;
    min_bid_gold: number | null;
    min_bid_silver: number | null;
    min_bid_copper: number | null;
    created_at: string;
}
