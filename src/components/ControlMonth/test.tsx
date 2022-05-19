import { render, screen } from '@testing-library/react'

import ControlMonth from '.'

describe('<ControlMonth />', () => {
  it('should render the heading', () => {
    const { container } = render(<ControlMonth />)

    expect(screen.getByRole('heading', { name: /ControlMonth/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
