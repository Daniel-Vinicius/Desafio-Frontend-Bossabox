import { Button, useDisclosure } from '@chakra-ui/react';

import { MdAdd } from 'react-icons/md';

import { ModalAdd } from '../Modal';

export function AddButton(): JSX.Element {
  const disclosure = useDisclosure();

  const { onOpen, isOpen, onClose } = disclosure;

  return (
    <Button
      leftIcon={<MdAdd />}
      colorScheme="pink"
      variant="solid"
      w="5rem"
      ml={['auto', '0']}
      onClick={onOpen}
    >
      <ModalAdd isOpen={isOpen} onClose={onClose} />
      Add
    </Button>
  );
}
