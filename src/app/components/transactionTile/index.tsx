'use client';

import { useEffect, useState } from "react"
import { Transaction } from "@/app/interfaces";
import transactionResponse from "@/tests/mocks/transactionStub";

export default function TransactionTile({ transactionId }: { transactionId: string }) {
    // Do react components each call their own data? We'll do this in this
    // app for now and see how much a shit show it is.
    const [data, setData] = useState<Transaction | undefined>();
    // TODO: A fetch goes here
    useEffect(() => {
        const response = transactionResponse(transactionId)
        setData(response)
    })
    return (
        <>
            <h1>Transaction</h1>
            {data ? <>
                <div>{data.text}</div>
                </> : null}
        </>
    )
}