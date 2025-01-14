export interface Transaction {
    transactionId: string;
    charId: string;
    slot: string;
    class: string[];
    metaData: { name: string; value: number }[];
    text: string;
    minBid: { gold: number; silver: number; copper: number };
}
