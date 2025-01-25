'use client';

import { useEffect, useState } from 'react';
import { Transaction } from '@/app/interfaces';

export default function TransactionTile({ transactionId }: { transactionId: string }) {
  const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Fetching data for transactionId:', transactionId);

    const fetchTransaction = async () => {
      try {
        const response = await fetch(`/api/transactions?transactionId=${transactionId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch transaction');
        }

        const result = await response.json();
        console.log('Fetched data for transactionId:', transactionId, result);

        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (transactionId) {
      fetchTransaction();
    } else {
      setLoading(false);
      setError('Invalid transactionId');
    }
  }, [transactionId]);

  if (loading) {
    return <div className="text-gray-500">Fetching transactions from traders...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!data) {
    return <div className="text-gray-500">Transaction not found, adventurer</div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-gray-500">Transaction not found, adventurer</div>;
  }

  const transaction = data[0] as Transaction;
  const minBidGold = transaction?.min_bid_gold ?? 0;
  const minBidSilver = transaction?.min_bid_silver ?? 0;
  const minBidCopper = transaction?.min_bid_copper ?? 0;

  const capitalizeWords = (text: string) => {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const capitalizeClass = (classArray: string | string[]) => {
    if (Array.isArray(classArray)) {
      return classArray
        .map(item => capitalizeWords(item))
        .join(', ');
    } else if (typeof classArray === 'string') {
      return capitalizeWords(classArray);
    }
    return 'Class not available';
  };


  return (
    <div className="p-4 bg-gray-300 shadow-md rounded-lg">
      <div className="mb-2 text-lg text-black">{capitalizeWords(transaction.title || 'Title not available')}</div>
      <div className="mb-2 text-black">
        <span className="font-semibold">Class: </span>
        {transaction.class && transaction.class.length > 0 ? capitalizeClass(transaction.class) : 'Class not available'}
      </div>
      <div className="mb-2 text-black">
        <span className="font-semibold">Slot: </span>
        {capitalizeWords(transaction.slot)}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-black">Description:</h3>
      <p className="mb-4 text-black">{transaction.description || 'No description available'}</p>
      <h3 className="font-semibold text-lg mb-2 text-black">Meta Data:</h3>
      <ul className="mb-4 list-disc list-inside text-black">
        {transaction.meta_data && transaction.meta_data.length > 0 ? (
          transaction.meta_data.map((meta, index) => (
            <li key={index} className="mb-1">
              {capitalizeWords(meta.name)}: {meta.value}
            </li>
          ))
        ) : (
          <li>No additional metadata available</li>
        )}
      </ul>
      <div className="mb-4 text-black">
        <span className="font-semibold">Bid: </span>
        {minBidGold}g {minBidSilver}s {minBidCopper}c
      </div>
    </div>
  );
}
