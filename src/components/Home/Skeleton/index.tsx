import {
  Skeleton as ChakraSkeleton,
  Flex,
  Heading,
  Box,
  Text,
} from '@chakra-ui/react';

import { frontendURL } from '../../../services/api';

import { cardStyles } from '../Card';

interface SkeletonProps {
  error: boolean;
}

export function Skeleton({ error }: SkeletonProps): JSX.Element {
  if (error) {
    return (
      <Flex mt="5rem" flexDirection="column" mx="auto">
        <Heading color="pink.400">Failed to fetch tools</Heading>
        <Text
          as="a"
          color="pink.100"
          borderRadius="0.5rem"
          mt="1rem"
          href={frontendURL}
        >
          Reload Page
        </Text>
      </Flex>
    );
  }

  return (
    <Box>
      <ChakraSkeleton
        p={cardStyles.p}
        borderRadius={cardStyles.borderRadius}
        h={cardStyles.h}
        w={cardStyles.w}
        mt={cardStyles.mt}
        backgroundColor={cardStyles.bg}
        startColor={cardStyles.bg}
        endColor="gray.700"
      />
      <ChakraSkeleton
        p={cardStyles.p}
        borderRadius={cardStyles.borderRadius}
        h={cardStyles.h}
        w={cardStyles.w}
        mt={cardStyles.mt}
        backgroundColor={cardStyles.bg}
        startColor={cardStyles.bg}
        endColor="gray.700"
      />
      <ChakraSkeleton
        p={cardStyles.p}
        borderRadius={cardStyles.borderRadius}
        h={cardStyles.h}
        w={cardStyles.w}
        mt={cardStyles.mt}
        backgroundColor={cardStyles.bg}
        startColor={cardStyles.bg}
        endColor="gray.700"
      />
    </Box>
  );
}
