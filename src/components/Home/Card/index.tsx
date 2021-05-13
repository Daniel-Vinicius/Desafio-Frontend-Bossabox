import { useCallback } from 'react';
import { Flex, Text, Link, Button, useDisclosure } from '@chakra-ui/react';
import { useMutation } from 'react-query';

import { MdClose } from 'react-icons/md';

import { queryClient } from '../../../services/queryClient';
import { api } from '../../../services/api';
import { Tool } from '../../../types/Tool';

import { Modal } from '../Modal';

export const cardStyles = {
  w: '100%',
  h: ['15rem', '10rem'],
  mt: '1rem',
  p: '1rem',
  borderRadius: '0.5rem',
  bg: 'gray.800',
};

interface CardProps {
  tool: Tool;
}

export function Card({
  tool: { link, title, tags, description, id },
}: CardProps): JSX.Element {
  const disclosure = useDisclosure();

  const { onOpen, isOpen, onClose } = disclosure;

  const deleteTool = useMutation(
    async () => {
      await api.delete(`tools/${id}`);

      onClose();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tools');
      },
    },
  );

  const handleRemoveModal = useCallback(() => {
    onOpen();
  }, [onOpen]);

  const handleRemove = useCallback(async () => {
    await deleteTool.mutateAsync();
  }, [deleteTool]);

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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isLoading={deleteTool.isLoading}
        onRemove={handleRemove}
        toolLink={link}
        toolTitle={title}
        key={id}
      />
      <Flex w="100%" align="center" justify="space-between">
        <Link
          isExternal
          href={link}
          color="pink.400"
          fontWeight="light"
          fontSize="2rem"
        >
          {title}
        </Link>
        <Button
          leftIcon={<MdClose size="1.5rem" />}
          variant="ghost"
          w="5rem"
          px={['2rem', '5rem']}
          colorScheme="white.200"
          onClick={handleRemoveModal}
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
