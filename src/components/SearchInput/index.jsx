import React from "react";
import { InputGroup, Input, InputRightAddon, Icon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  return (
    <InputGroup size="sm" w={80} borderColor="purple.900">
      <Input
        placeholder="Pesquisar"
        bg="gray.50"
        color="gray.900"
        borderRadius={8}
      />
      <InputRightAddon
        borderRadius={8}
        bg="purple.900"
        children={<Icon as={AiOutlineSearch} w={5} h={5} color="gray.50" />}
      />
    </InputGroup>
  );
};

export default SearchInput;
