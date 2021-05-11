import Head from 'next/head';

import { Flex } from '@chakra-ui/react';
import { SearchBox } from '../components/Home/SearchBox';
import { Card } from '../components/Home/Card';

import { useTools } from '../hooks/useTools';

import { Skeleton } from '../components/Home/Skeleton';

export default function Home(): JSX.Element {
  const { data, isLoading, isFetching, error } = useTools();
  const t = true;

  console.log(data);

  return (
    <>
      <Head>
        <title>Desafio Bossa Box</title>
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        flexDir="column"
        p="1rem"
        mb={['1rem', 0]}
        maxW="80rem"
        marginX="auto"
      >
        <SearchBox />

        {isLoading && <Skeleton error={Boolean(error)} />}

        {!isLoading && (
          <>
            <Card />
            <Card />
            <Card />
          </>
        )}
      </Flex>
    </>
  );
}
