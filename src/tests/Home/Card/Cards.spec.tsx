/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';

import { Cards } from '../../../components/Home/Card/Cards';

import { useToolsFiltered } from '../../../contexts/ToolsFilteredContext';
import { useTools } from '../../../hooks/useTools';

const tool = {
  id: 1,
  title: 'Test Tool',
  link: 'https://example.com',
  description: 'Test Tool description lorem ipsum lorem ipsum lorem.',
  tags: ['tool', 'test', '#example'],
};

jest.mock('../../../contexts/ToolsFilteredContext');
jest.mock('../../../hooks/useTools');

describe('Cards Component', () => {
  const queryClient = new QueryClient();

  const Wrapper = ({ children }: { children: ReactNode }): JSX.Element => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('renders correctly when there is no data', async () => {
    const useToolsFilteredMocked = mocked(useToolsFiltered);
    const useToolsMocked = mocked(useTools);

    useToolsMocked.mockReturnValueOnce({
      isLoading: false,
      data: { tools: [tool] },
      error: false,
    } as any);

    useToolsFilteredMocked.mockReturnValue({
      isFiltered: true,
      toolsFiltered: [],
      isNoData: true,
    } as any);

    render(<Wrapper children={<Cards />} />);

    expect(screen.getByText('Tool not found')).toBeInTheDocument();
  });

  it('renders correctly when there is error', async () => {
    const useToolsFilteredMocked = mocked(useToolsFiltered);
    const useToolsMocked = mocked(useTools);

    useToolsMocked.mockReturnValue({
      isLoading: true,
      data: [],
      error: true,
    } as any);

    useToolsFilteredMocked.mockReturnValue({
      isFiltered: false,
      toolsFiltered: [],
      isNoData: false,
    } as any);

    render(<Wrapper children={<Cards />} />);
    expect(
      await screen.findByText('Failed to fetch tools'),
    ).toBeInTheDocument();
  });
});
