import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react'
import TransactionTile from './index'
import transactionResponse from '@/tests/mocks/transactionStub'

const getTransactionFromStubs = () => {
    return transactionResponse("5f4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1b")
}
jest.mock('node-fetch', () => ({
    __esModule: true,
    default: jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(getTransactionFromStubs())
    }))
}))

it('renders the transaction component', async () => {
    const transactionId = getTransactionFromStubs()?.transactionId
    await act(async () => {
        render(<TransactionTile transactionId={transactionId}/>)
    })
    expect(screen.getByText('Transaction')).toBeInTheDocument()
})

it('fetches and displays transaction data', async () => {
    const transactionId = getTransactionFromStubs()?.transactionId
    await act(async () => {
        render(<TransactionTile transactionId={transactionId}/>)
    })
    // Add more assertions based on the fetched data
    expect(screen.getByText('Transaction')).toBeInTheDocument()
    // Example: expect(screen.getByText('Some Transaction Detail')).toBeInTheDocument()
})

it('handles missing transactionId', async () => {
    await act(async () => {
        render(<TransactionTile transactionId={''}/>)
    })
    expect(screen.getByText('Transaction')).toBeInTheDocument()
    // Add more assertions to handle missing transactionId case
})