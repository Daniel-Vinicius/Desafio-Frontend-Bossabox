import { api } from '../services/api';

import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { Tool } from '../types/Tool';

type getToolsReturn = { tools: Tool[] };

export async function getTools(): Promise<getToolsReturn> {
  const { data } = await api.get<Tool[]>('tools');

  return {
    tools: data,
  };
}

export function useTools(
  options?: UseQueryOptions<getToolsReturn>,
): UseQueryResult<getToolsReturn, unknown> {
  return useQuery(['tools'], () => getTools(), {
    staleTime: 1000 * 60 * 10, // 10 minutes,
    ...options,
  });
}
