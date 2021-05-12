import { Card } from './index';

import { useTools } from '../../../hooks/useTools';

import { Skeleton, SkeletonError } from '../Skeleton';

import { useToolsFiltered } from '../../../contexts/ToolsFilteredContext';

export function Cards(): JSX.Element {
  const { data, isLoading, error } = useTools();
  const { isFiltered, toolsFiltered, isNoData } = useToolsFiltered();
  const tools = isFiltered ? toolsFiltered : data?.tools;

  if (isNoData) {
    return <SkeletonError errorMessage="Tool not found" />;
  }

  return (
    <>
      {isLoading && <Skeleton error={Boolean(error)} />}

      {!isLoading &&
        data &&
        tools?.map((tool) => <Card key={tool.id} tool={tool} />)}
    </>
  );
}
