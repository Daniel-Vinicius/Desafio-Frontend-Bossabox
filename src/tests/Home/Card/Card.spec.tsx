import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { render, screen, fireEvent } from '@testing-library/react';

import { Card } from '../../../components/Home/Card';

const tool = {
  id: 1,
  title: 'Test Tool',
  link: 'https://example.com',
  description: 'Test Tool description lorem ipsum lorem ipsum lorem.',
  tags: ['tool', 'test', '#example'],
};

describe('Card Component', () => {
  const queryClient = new QueryClient();

  const Wrapper = ({ children }: { children: ReactNode }): JSX.Element => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('renders correctly', () => {
    render(<Wrapper children={<Card tool={tool} />} />);

    expect(screen.getByText(tool.title)).toBeInTheDocument();
    expect(screen.getByText('#tool #test #example')).toBeInTheDocument();
    expect(screen.getByText(tool.description)).toBeInTheDocument();
  });

  it('Open removal modal when button is clicked', () => {
    render(<Wrapper children={<Card tool={tool} />} />);

    expect(screen.getByText(tool.title)).toBeInTheDocument();
    expect(screen.getByText('#tool #test #example')).toBeInTheDocument();
    expect(screen.getByText(tool.description)).toBeInTheDocument();

    const removeButton = screen.getByText('Remove');

    fireEvent.click(removeButton);

    expect(screen.getByText('Remove Tool')).toBeInTheDocument();
  });
});
