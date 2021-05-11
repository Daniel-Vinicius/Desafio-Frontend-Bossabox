import { useState, useEffect } from 'react';

import {
  Flex,
  Text,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';

import { MdSearch, MdAdd } from 'react-icons/md';

import { Input } from '../../Form/Input';

export function SearchBox(): JSX.Element {
  const [search, setSearch] = useState('');
  const [checkbox, setCheckbox] = useState(0);

  useEffect(() => {
    console.log(search, checkbox);
  }, [search, checkbox]);

  return (
    <Flex direction="column" w="100%">
      <Text as="h1" fontWeight="bold" fontSize="2rem">
        VUTTR
      </Text>
      <Text as="h2" fontSize="1.5rem">
        Very Useful Tools to remember
      </Text>
      <Flex justify="space-between" mt="1rem" flexDirection={['column', 'row']}>
        <Flex flexDirection={['column', 'row']}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<MdSearch color="gray.300" />}
            />
            <Input
              name="search"
              placeholder="Search..."
              value={search}
              maxW="100%"
              borderWidth="0.2rem"
              paddingLeft="2rem"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <Checkbox
            colorScheme="pink"
            minW="12.5rem"
            ml={['0', '1rem']}
            my={['1rem', '0']}
            value={checkbox}
            onChange={({ target }) =>
              target.value == '0' ? setCheckbox(1) : setCheckbox(0)
            }
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
    </Flex>
  );
}
