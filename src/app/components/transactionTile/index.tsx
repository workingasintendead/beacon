'use client';

import { useEffect, useState } from "react";
import { Transaction } from "@/app/interfaces";
import transactionResponse from "@/tests/mocks/transactionStub";

export default function TransactionTile({ transactionId }: { transactionId: string }) {
    const [data, setData] = useState<Transaction | undefined>();

    useEffect(() => {
        const response = transactionResponse(transactionId);
        setData(response);
    }, [transactionId]);

    return (
        <div className="p-4 bg-gray-300 shadow-md rounded-lg">
            {data ? (
                <>
                    <div className="mb-2 text-lg text-black">{data.text}</div>
                    <div className="mb-2 text-black"><span className="font-semibold">Slot: </span>{data.slot}</div>
                    <div className="mb-4 text-black"><span className="font-semibold">MinBid: </span>{data.minBid.gold}g {data.minBid.silver}s {data.minBid.copper}c</div>
                    <h3 className="font-semibold text-lg mb-2 text-black">Stats:</h3>
                    <ul className="mb-4 list-disc list-inside text-black">
                        {data.metaData.map((meta, index) => (
                            <li key={index} className="mb-1">
                                {meta.name}: {meta.value}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div className="text-gray-500">Loading...</div>
            )}
        </div>
    );
}
