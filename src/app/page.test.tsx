import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page'
import '@testing-library/jest-dom'

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