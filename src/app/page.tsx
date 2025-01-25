'use client';

import TransactionTile from "./components/transactionTile";
import { useEffect, useState } from "react";

export default function Home() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions");
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        const data = await response.json();
        setTransactions(data);
      } catch (err: any) {
        console.error("Error fetching transactions:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div className="text-gray-500">Mages are rebuilding the trading post...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  console.log(transactions);

  return (
    <div className="container mx-auto p-4">
      <input
        className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        type="text"
        placeholder="Search"
      />
      <div className="grid grid-cols-1 gap-4">
      {transactions.map((transaction) => (
        <TransactionTile
          key={transaction.transactionId}
          transactionId={transaction.transactionId}
        />
      ))}
      </div>
    </div>
  );
}
