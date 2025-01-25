import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([
    { transactionId: '1' },
    { transactionId: '2' },
  ]),
});

describe('Home', () => {
    it('renders the search input', async () => {
      render(<Home />);

      await waitFor(() => {
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
      });
    });

  it('renders the TransactionTile components based on fetched transactions', async () => {
    render(<Home />);

    await waitFor(() => {
      const transactionTiles = screen.getAllByRole('listitem');
      expect(transactionTiles).toHaveLength(2);
    });
  });

  it('shows loading text while transactions are being fetched', () => {
    render(<Home />);

    expect(screen.getByText('Mages are rebuilding the trading post...')).toBeInTheDocument();
  });

  it('shows error message if fetching transactions fails', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Failed to fetch transactions'));
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch transactions')).toBeInTheDocument();
    });
  });
});
