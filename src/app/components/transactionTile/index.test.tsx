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

        expect(await screen.findByText(new RegExp(`${getTransactionFromStubs().slot}`))).toBeInTheDocument();
    });

    it('fetches and displays minBid gold', async () => {
        const transactionId = getTransactionFromStubs()?.transactionId
        render(<TransactionTile transactionId={transactionId} />)

        expect(await screen.findByText(new RegExp(`${getTransactionFromStubs().minBid.gold}`))).toBeInTheDocument();
    })

    it('fetches and displays metaData', async () => {
        const transactionId = getTransactionFromStubs()?.transactionId
        const metadata = getTransactionFromStubs()?.metaData;
        render(<TransactionTile transactionId={transactionId} />)

        for (const meta of metadata!) {
            expect(await screen.findByText(`${meta.name}: ${meta.value}`)).toBeInTheDocument();
        }
    });
})
