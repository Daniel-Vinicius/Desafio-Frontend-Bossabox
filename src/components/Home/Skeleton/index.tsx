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

interface SkeletonErrorProps {
  errorMessage: string;
}

export function SkeletonError({
  errorMessage,
}: SkeletonErrorProps): JSX.Element {
  return (
    <Flex mt="5rem" flexDirection="column" mx="auto">
      <Heading color="pink.400">{errorMessage}</Heading>
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

export function Skeleton({ error }: SkeletonProps): JSX.Element {
  if (error) {
    return <SkeletonError errorMessage="Failed to fetch tools" />;
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
