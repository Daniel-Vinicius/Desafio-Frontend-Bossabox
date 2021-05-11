import { Flex, Text, Button } from '@chakra-ui/react';

import { MdClose } from 'react-icons/md';

export function Card(): JSX.Element {
  return (
    <Flex
      w="100%"
      h={['15rem', '10rem']}
      p="1rem"
      bg="gray.800"
      mt="1rem"
      borderRadius="0.5rem"
      flexDir="column"
    >
      <Flex w="100%" align="center" justify="space-between">
        <Text color="pink.400" fontWeight="light" fontSize="2rem">
          Notion
        </Text>
        <Button leftIcon={<MdClose size="1.5rem" />} variant="ghost" w="5rem">
          Remove
        </Button>
      </Flex>

      <Text>
        All in one tool to organize teams and ideas. Write, plan, collaborate,
        and get organized.
      </Text>
      <Text fontWeight="bold" color="pink.200" mt="auto">
        #organization #planning #collaboration #writing #calendar
      </Text>
    </Flex>
  );
}
