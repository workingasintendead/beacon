'use client';

import { useEffect, useState } from "react"
import fetch from 'node-fetch';
import { Transaction } from "@/app/interfaces";

export default function TransactionTile({ transactionId }: { transactionId: string }) {
    // Do react components each call their own data? We'll do this in this
    // app for now and see how much a shit show it is.
    const [data, setData] = useState<Transaction | undefined>();
    // Pull transactionUsing transactionId
    useEffect(() => {
        fetch('../test/transactionStub.json')
            .then(res => res.json() as Promise<Transaction>)
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h1>Transaction</h1>
            <p>{transactionId}</p>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}