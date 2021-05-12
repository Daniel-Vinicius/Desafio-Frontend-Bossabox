import Head from 'next/head';

import { Flex } from '@chakra-ui/react';
import { SearchBox } from '../components/Home/SearchBox';
import { Cards } from '../components/Home/Card/Cards';

export default function Home(): JSX.Element {
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
        <Cards />
      </Flex>
    </>
  );
}
