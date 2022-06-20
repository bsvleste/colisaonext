import { render, screen } from '@testing-library/react'

import Visitante from '.'

describe('<Visitante />', () => {
  it('should render the heading', () => {
    const { container } = render(<Visitante />)

    expect(screen.getByRole('heading', { name: /Visitante/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
