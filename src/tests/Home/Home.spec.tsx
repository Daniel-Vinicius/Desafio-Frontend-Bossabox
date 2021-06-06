import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';

import Home from '../../pages';

describe('Home Page', () => {
  const queryClient = new QueryClient();

  const Wrapper = ({ children }: { children: ReactNode }): JSX.Element => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('renders correctly', () => {
    render(<Wrapper children={<Home />} />);

    expect(screen.getByText('VUTTR')).toBeInTheDocument();
  });
});
