import { render, screen } from '@testing-library/react'
import GallerySection from '../components/GallerySection/GallerySection'
import { vi } from 'vitest'

vi.mock('../components/Carousel/Carousel', () => ({
  default: () => <div data-testid='carousel-mock' />
}))

vi.mock('yet-another-react-lightbox', () => ({
  __esModule: true,
  default: () => <div data-testid='lightbox-mock' />
}))

describe('GallerySection component', () => {
  it('renders headings and subcomponents', () => {
    render(<GallerySection />)
    expect(screen.getByText(/Shoot portraits/i)).toBeInTheDocument()
    expect(screen.getByTestId('carousel-mock')).toBeInTheDocument()
    expect(screen.getByTestId('lightbox-mock')).toBeInTheDocument()
  })
})
