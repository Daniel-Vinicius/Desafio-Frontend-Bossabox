import { Flex, Text } from '@chakra-ui/react';

import { SearchBoxActions } from './SearchBoxActions';

export function SearchBox(): JSX.Element {
  return (
    <Flex direction="column" w="100%">
      <Text as="h1" fontWeight="bold" fontSize="2rem">
        VUTTR
      </Text>
      <Text as="h2" fontSize="1.5rem">
        Very Useful Tools to remember
      </Text>
      <SearchBoxActions />
    </Flex>
  );
}
