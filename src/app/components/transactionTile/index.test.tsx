import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import TransactionTile from './index';
import transactionResponse from '@/tests/mocks/transactionStub';

const getTransactionFromStubs = () => {
  return transactionResponse("3d2f8425-e5e0-4330-b81f-c416c63b53da");
};

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(transactionResponse("3d2f8425-e5e0-4330-b81f-c416c63b53da")),
});

describe('TransactionTile', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders the transaction tile', async () => {
    const mockTransaction = getTransactionFromStubs();

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue([mockTransaction]),
    });

    const transactionId = mockTransaction.transactionId;
    render(<TransactionTile transactionId={transactionId} />);

    expect(await screen.findByText(mockTransaction.title)).toBeInTheDocument();
  });

  it('fetches and displays description', async () => {
    const mockTransaction = getTransactionFromStubs();

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue([mockTransaction]),
    });

    const transactionId = mockTransaction.transactionId;
    render(<TransactionTile transactionId={transactionId} />);

    expect(await screen.findByText(mockTransaction.description)).toBeInTheDocument();
  });

  it('fetches and displays slot', async () => {
    const mockTransaction = getTransactionFromStubs();

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue([mockTransaction]),
    });

    const transactionId = mockTransaction.transactionId;
    render(<TransactionTile transactionId={transactionId} />);

    expect(await screen.findByText(mockTransaction.slot)).toBeInTheDocument();
  });


  it('fetches and displays minBid gold', async () => {
    const mockTransaction = getTransactionFromStubs();

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue([mockTransaction]),
    });

    const transactionId = mockTransaction.transactionId;
    render(<TransactionTile transactionId={transactionId} />);

    expect(await screen.findByText(new RegExp(String(mockTransaction.min_bid_gold)))).toBeInTheDocument();
  });


  it('fetches and displays metadata', async () => {
    const mockTransaction = getTransactionFromStubs();

    mockTransaction.meta_data = [{ name: 'test property', value: 'n' }];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue([mockTransaction]),
    });

    const transactionId = mockTransaction.transactionId;
    render(<TransactionTile transactionId={transactionId} />);

    expect(await screen.findByText('test property: n')).toBeInTheDocument();
  });


  it('shows error message if fetching transaction fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch transaction'));

    const transactionId = getTransactionFromStubs()?.transactionId;
    render(<TransactionTile transactionId={transactionId} />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch transaction')).toBeInTheDocument();
    });
  });

  it('displays loading state while fetching transaction', async () => {
    render(<TransactionTile transactionId="1" />);
    expect(screen.getByText('Fetching transactions from traders...')).toBeInTheDocument();
  });

  it('displays "Transaction not found," when no data is fetched', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true, json: jest.fn().mockResolvedValue([]) });

    const transactionId = getTransactionFromStubs()?.transactionId;
    render(<TransactionTile transactionId={transactionId} />);

    await waitFor(() => {
      expect(screen.getByText('Transaction not found, adventurer')).toBeInTheDocument();
    });
  });
});
