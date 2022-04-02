import React from "react";
import { MenuList, MenuItem } from "@chakra-ui/react";

const ListMenu = ({ options, setFilter }) => {
  return (
    <MenuList borderColor='purple.900' bg='gray.700'>
      {options.map((option, index) => (
        <MenuItem
          key={option.id || index}
          _hover={{ background: 'purple.900' }}
          _focus={{ background: 'purple.900' }}
          onClick={() => setFilter(option.label.toLowerCase())}
        >
          {option.label}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default ListMenu;