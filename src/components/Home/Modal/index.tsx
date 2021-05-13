import {
  Button,
  Modal as ChakraModal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  Text,
  Link,
} from '@chakra-ui/react';

interface ModalProps {
  toolTitle: string;
  toolLink: string;
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onRemove: () => Promise<void>;
}

export function Modal({
  toolTitle,
  toolLink,
  isOpen,
  isLoading,
  onClose,
  onRemove,
}: ModalProps): JSX.Element {
  return (
    <ChakraModal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="gray.900">
        <ModalHeader>Remove Tool</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" mb="1rem">
            Are you sure you want remove{' '}
            <Link
              isExternal
              href={toolLink}
              color="pink.400"
              fontWeight="light"
              fontSize="1.125rem"
            >
              {toolTitle}
            </Link>{' '}
            ?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" colorScheme="white.200" onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="pink"
            mx="1rem"
            onClick={onRemove}
            isLoading={isLoading}
          >
            Yes, remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}
