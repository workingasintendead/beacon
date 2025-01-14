import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Transaction from './index'

it('renders the transaction component', () => {
    render(<Transaction />)
    expect(screen.getByText('Transaction')).toBeInTheDocument()
})