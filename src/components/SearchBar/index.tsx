import React from "react";

import {
  Form,
  Input,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  Button,
  Box,
} from "./styles";

export default function SearchBar({ checkboxLabel }) {
  return (
    <Form>
      <Box>
        <Input placeholder="Search" />

        <CheckboxContainer htmlFor="search-tags">
          <Checkbox id="search-tags" />

          <CheckboxLabel>{checkboxLabel}</CheckboxLabel>
        </CheckboxContainer>
      </Box>
      <Button type="button" />
    </Form>
  );
}
