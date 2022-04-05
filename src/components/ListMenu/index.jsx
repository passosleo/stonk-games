import React from "react";
import { MenuList, MenuItem } from "@chakra-ui/react";

const ListMenu = ({ options, setSort }) => {
  return (
    <MenuList 
      borderColor='purple.900'
      bg='gray.700'
      px={2}
      maxHeight={120}
      overflow="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: "8px",
        },
        '&::-webkit-scrollbar-thumb': {
          background: "#4A5568",
          borderRadius: '12px',
        },
      }}
    >
      {options.map((option, index) => (
        <MenuItem
          key={option.id || index}
          borderRadius={12}
          _hover={{ background: 'gray.600' }}
          _focus={{ background: 'gray.600' }}
          onClick={() => setSort(option.label.toLowerCase())}
        >
          {option.label}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default ListMenu;