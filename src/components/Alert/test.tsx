import { render, screen } from '@testing-library/react';

import Alert from '.';
describe('<Alert />', () => {
  it('should render the heading', () => {
    const { container } = render(<Alert></Alert>);
    expect(screen.getByRole('heading', { name: /Alert/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
