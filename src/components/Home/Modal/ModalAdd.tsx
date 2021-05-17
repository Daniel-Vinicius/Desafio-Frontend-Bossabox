/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Modal as ChakraModal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  FormControl,
  CSSObject,
} from '@chakra-ui/react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Tool } from '../../../types/Tool';
import { api } from '../../../services/api';
import { queryClient } from '../../../services/queryClient';

import { Input } from '../../Form/Input';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd?: () => Promise<void>;
}

const labelStyle: CSSObject = {
  color: 'pink.500',
  fontWeight: 'bold',
  mb: '-0.2rem',
};

type CreateToolFormData = {
  name: string;
  link: string;
  description: string;
  tags: string;
};

const CreateToolFormSchema = yup.object().shape({
  name: yup.string().required('Enter the name of the tool'),
  link: yup.string().required('Enter the tool link').url('Invalid link'),
  description: yup.string().required('Enter a description for the tool'),
  tags: yup.string().required('Enter tool tags'),
});

export function ModalAdd({ isOpen, onClose, onAdd }: ModalProps): JSX.Element {
  const createTool = useMutation(
    async (tool: CreateToolFormData) => {
      const response = await api.post<Tool>('tools', {
        title: tool.name,
        link: tool.link,
        description: tool.description,
        tags: tool.tags.split(' '),
      });

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tools');
      },
    },
  );

  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm<CreateToolFormData>({
    resolver: yupResolver(CreateToolFormSchema),
  });

  const handleCreateTool: SubmitHandler<CreateToolFormData> = async (
    values,
  ) => {
    await createTool.mutateAsync(values);
    onClose();
    reset();
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleCreateTool)}
        bg="gray.900"
        mr={['2rem', '1rem']}
        ml={['1rem', 0]}
      >
        <ModalHeader>+ Add new Tool</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <Input
              {...register('name')}
              error={errors.name}
              name="name"
              label="Tool Name"
              variantAlternative="flushed"
              sizeAlternative="md"
              labelStyle={labelStyle}
            />
          </FormControl>

          <FormControl mt="1rem">
            <Input
              {...register('link')}
              error={errors.link}
              name="link"
              label="Tool Link"
              variantAlternative="flushed"
              sizeAlternative="md"
              labelStyle={labelStyle}
            />
          </FormControl>
          <FormControl mt="1rem">
            <Input
              {...register('description')}
              error={errors.description}
              name="description"
              label="Tool description"
              variantAlternative="flushed"
              sizeAlternative="md"
              labelStyle={labelStyle}
            />
          </FormControl>
          <FormControl mt="1rem">
            <Input
              {...register('tags')}
              error={errors.tags}
              name="tags"
              label="Tags"
              variantAlternative="flushed"
              sizeAlternative="md"
              labelStyle={labelStyle}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="pink"
            mr={3}
            onClick={onAdd}
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}
