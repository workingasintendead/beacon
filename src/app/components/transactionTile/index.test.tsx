import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TransactionTile from './index'
import transactionResponse from '@/tests/mocks/transactionStub'

const getTransactionFromStubs = () => {
    return transactionResponse("5f4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1b")
}

describe('transactionTile', () => {
    it('renders the transaction component', async () => {
        const transactionId = getTransactionFromStubs()?.transactionId

        render(<TransactionTile transactionId={transactionId} />)

        expect(screen.getByText('Transaction')).toBeInTheDocument()
    })

    it('fetches and displays description', async () => {
        const transactionId = getTransactionFromStubs()?.transactionId
        render(<TransactionTile transactionId={transactionId} />)

        expect(await screen.findByText(getTransactionFromStubs().text)).toBeInTheDocument();
    })

    it('fetches and displays slot', async () => {
        const transactionId = getTransactionFromStubs()?.transactionId
        render(<TransactionTile transactionId={transactionId} />);

        expect(await screen.findByText(new RegExp(getTransactionFromStubs().slot))).toBeInTheDocument();
    });

    it('fetches and displays minBid gold', async () => {
        const transactionId = getTransactionFromStubs()?.transactionId
        render(<TransactionTile transactionId={transactionId} />)

        expect(await screen.findByText(new RegExp(String((getTransactionFromStubs().minBid.gold))))).toBeInTheDocument();
    })

    it('fetches and displays metaData', async () => {
        const transaction = getTransactionFromStubs();
        transaction.metaData = [
            { name: "test property", value: "n" },
        ];
        const transactionId = transaction.transactionId;
        render(<TransactionTile transactionId={transactionId} />);

        expect(await screen.findByText("test property: n")).toBeInTheDocument();
    });
})
