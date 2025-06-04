import { render, screen } from '@testing-library/react'
import { GalleriaDemo } from '../components/Galleria/Galleria'
import { vi } from 'vitest'

vi.mock('primereact/galleria', () => ({
  Galleria: ({ value, item }: any) => (
    <div data-testid="galleria">{value.map(item)}</div>
  )
}))

vi.mock('primereact/image', () => ({
  Image: (props: any) => <img {...props} />
}))

describe('GalleriaDemo component', () => {
  it('renders images inside galleria', () => {
    render(<GalleriaDemo />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })
})
