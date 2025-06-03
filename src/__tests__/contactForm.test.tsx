import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import emailjs from '@emailjs/browser'
import { vi } from 'vitest'

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn() }
}))

describe('contact form', () => {
  it('changes button text after successful submit', async () => {
    // @ts-ignore
    emailjs.send.mockResolvedValue({ status: 200, text: 'OK' })

    render(<App />)

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/Phone number/i), { target: { value: '+123456789' } })

    fireEvent.click(screen.getByRole('button', { name: /send/i }))

    await screen.findByRole('button', { name: /message sent!/i })
  })
})
