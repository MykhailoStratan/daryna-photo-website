import { render, screen } from '@testing-library/react'
import PackagesSection from '../components/PackagesSection/PackagesSection'
import { vi } from 'vitest'

vi.mock('primereact/image', () => ({
  Image: (props: any) => <img {...props} />
}))

describe('PackagesSection component', () => {
  it('renders package pricing tables', () => {
    render(<PackagesSection />)
    expect(screen.getByText(/Package Pricing/i)).toBeInTheDocument()
    expect(screen.getAllByRole('table').length).toBeGreaterThan(0)
  })
})
