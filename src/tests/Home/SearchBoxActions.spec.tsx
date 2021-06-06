import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { render, screen, fireEvent } from '@testing-library/react';

import { SearchBoxActions } from '../../components/Home/SearchBox/SearchBoxActions';

describe('SearchBoxActions Component', () => {
  const queryClient = new QueryClient();

  const Wrapper = ({ children }: { children: ReactNode }): JSX.Element => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('renders correctly', () => {
    render(<Wrapper children={<SearchBoxActions />} />);

    const inputSearch = screen.getByPlaceholderText('Search...');

    fireEvent.change(inputSearch, { target: { value: 'Tool' } });
    fireEvent.keyPress(inputSearch, { key: 'Enter', code: 13 });

    expect(screen.getByText('Search in tags only')).toBeInTheDocument();
  });
});
