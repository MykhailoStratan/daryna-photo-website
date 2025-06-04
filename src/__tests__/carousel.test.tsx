import { render, screen } from '@testing-library/react'
import ResponsiveDemo from '../components/Carousel/Carousel'
import { vi } from 'vitest'

vi.mock('primereact/carousel', () => ({
  Carousel: ({ value, itemTemplate }: any) => (
    <div data-testid="carousel">{value.map(itemTemplate)}</div>
  )
}))

vi.mock('primereact/image', () => ({
  Image: (props: any) => <img {...props} />
}))

describe('Carousel component', () => {
  it('renders all carousel images', () => {
    render(<ResponsiveDemo />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(11)
  })
})
