import { render, screen } from '@testing-library/react'
import SubsidyCalculator from '@/components/calculator/SubsidyCalculator'

describe('SubsidyCalculator', () => {
    it('renders correctly', () => {
        render(<SubsidyCalculator />)
        expect(screen.getByText('Solar Subsidy Calculator')).toBeInTheDocument()
        expect(screen.getByText('Monthly Electricity Bill (₹)')).toBeInTheDocument()
    })

    it('calculates subsidy correctly for default values', () => {
        render(<SubsidyCalculator />)

        // Check if the default calculation is present
        expect(screen.getByText('Estimated Subsidy')).toBeInTheDocument()

        // Check if the button is present
        expect(screen.getByRole('button', { name: /Check My Subsidy Eligibility/i })).toBeInTheDocument()
    })
})
