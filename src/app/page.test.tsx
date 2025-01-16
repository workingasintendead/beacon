import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page'
import transactionResponse from '@/tests/mocks/transactionStub'
import '@testing-library/jest-dom'

const getTransactionFromStubs = () => {
    return transactionResponse("5f4b1f3b-4b7b-4b1b-8e0e-4f1b1b1b1b1b")
}

describe('Home', () => {
    it('renders the search input', () => {
        render(<Home />);
        const searchInput = screen.getByPlaceholderText('Search');
        expect(searchInput).toBeInTheDocument();
    });

    it('renders the TransactionTile component', () => {
        render(<Home />);
        const transactionTile = screen.getAllByText('Transaction');
        expect(transactionTile.length).toBe(16);
    });
});