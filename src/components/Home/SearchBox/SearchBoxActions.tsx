import { useCallback } from 'react';

import {
  Flex,
  Checkbox,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

import { MdSearch, MdAdd, MdClose } from 'react-icons/md';

import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Tool } from '../../../types/Tool';
import { api } from '../../../services/api';
import { useToolsFiltered } from '../../../contexts/ToolsFilteredContext';

import { Input } from '../../Form/Input';

type SearchFormType = {
  search: string;
  checkbox: boolean;
};

const SearchFormSchema = yup.object().shape({
  search: yup
    .string()
    .required('Required field')
    .min(3, '3 characters minimum'),
  checkbox: yup.boolean(),
});

export function SearchBoxActions(): JSX.Element {
  const { isFiltered, setToolsFiltered, setIsNoData, isNoData } =
    useToolsFiltered();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormType>({
    resolver: yupResolver(SearchFormSchema),
  });

  const handleSearch: SubmitHandler<SearchFormType> = async (values, event) => {
    const { checkbox, search } = values;
    event?.preventDefault();
    const { data } = await api.get(`/tools?q=${search}`);

    if (checkbox) {
      const onlyTags = data.filter((tool: Tool) => tool.tags.includes(search));
      if (onlyTags.length < 1) {
        setIsNoData(true);
        return;
      }
      setToolsFiltered(onlyTags);
    }

    if (data.length < 1) {
      setIsNoData(true);
      return;
    }
    setToolsFiltered(data);
  };

  const clearFilters = useCallback(() => {
    reset();
    setToolsFiltered([]);
    setIsNoData(false);
  }, [setIsNoData, setToolsFiltered, reset]);

  return (
    <Flex justify="space-between" mt="1rem" flexDirection={['column', 'row']}>
      <Flex
        as="form"
        onSubmit={handleSubmit(handleSearch)}
        flexDirection={['column', 'row']}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<MdSearch color="gray.300" />}
          />
          {isFiltered ||
            (isNoData && (
              <InputRightElement
                cursor="pointer"
                children={<MdClose color="gray.300" />}
                onClick={clearFilters}
              />
            ))}
          <Input
            {...register('search')}
            name="search"
            error={errors.search}
            placeholder="Search..."
            maxW="100%"
            borderWidth="0.2rem"
            paddingLeft="2rem"
            paddingRight="2rem"
            _autofill={{
              _selected: {
                backgroundColor: 'red.600',
              },
            }}
          />
        </InputGroup>
        <Checkbox
          {...register('checkbox')}
          colorScheme="pink"
          minW="12.5rem"
          ml={['0', '1rem']}
          my={['1rem', '0']}
        >
          Search in tags only
        </Checkbox>
      </Flex>
      <Button
        leftIcon={<MdAdd />}
        colorScheme="pink"
        variant="solid"
        w="5rem"
        ml={['auto', '0']}
      >
        Add
      </Button>
    </Flex>
  );
}
