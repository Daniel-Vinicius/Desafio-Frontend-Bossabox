import { Flex, Text, Button } from '@chakra-ui/react';

import { MdClose } from 'react-icons/md';

import { Tool } from '../../../types/Tool';

export const cardStyles = {
  w: '100%',
  h: ['15rem', '10rem'],
  mt: '1rem',
  p: '1rem',
  borderRadius: '0.5rem',
  bg: 'gray.800',
};

export function Card({
  tool: { link, title, tags, description },
}: {
  tool: Tool;
}): JSX.Element {
  return (
    <Flex
      w={cardStyles.w}
      h={cardStyles.h}
      p={cardStyles.p}
      mt={cardStyles.mt}
      borderRadius={cardStyles.borderRadius}
      bg={cardStyles.bg}
      flexDir="column"
    >
      <Flex w="100%" align="center" justify="space-between">
        <Text
          as="a"
          target="_blank"
          href={link}
          color="pink.400"
          fontWeight="light"
          fontSize="2rem"
        >
          {title}
        </Text>
        <Button
          leftIcon={<MdClose size="1.5rem" />}
          variant="ghost"
          w="5rem"
          px="5rem"
          colorScheme="white.200"
        >
          Remove
        </Button>
      </Flex>

      <Text>{description}</Text>
      <Text fontWeight="bold" color="pink.200" mt="auto">
        {tags.map((tag) => {
          return ` #${tag}`;
        })}
      </Text>
    </Flex>
  );
}
