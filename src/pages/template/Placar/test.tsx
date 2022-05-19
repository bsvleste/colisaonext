import { render, screen } from '@testing-library/react'

import Placar from '.'

describe('<Placar />', () => {
  it('should render the heading', () => {
    const { container } = render(<Placar />)

    expect(screen.getByRole('heading', { name: /Placar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
