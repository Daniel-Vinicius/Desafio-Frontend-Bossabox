import Head from 'next/head';

import { Flex } from '@chakra-ui/react';
import { SearchBox } from '../components/Home/SearchBox';

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
        maxW="80rem"
        marginX="auto"
      >
        <SearchBox />
      </Flex>
    </>
  );
}
