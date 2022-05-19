import { render, screen } from '@testing-library/react'

import Scoreboard from '.'

describe('<Scoreboard />', () => {
  it('should render the heading', () => {
    const { container } = render(<Scoreboard />)

    expect(screen.getByRole('heading', { name: /Scoreboard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
