import React from "react";
import { Button, Icon, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { sortOptions } from "../../static/data";

const SortButton = ({ title, icon, setSort }) => {
  return (
    <Menu maxWidth={35}>
      <MenuButton
        as={Button}
        rightIcon={<Icon as={icon} w={6} h={6} />}
        backgroundColor="gray.900"
        borderWidth={1}
        borderColor='purple.900'
        boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
        _active={{
          backgroundColor: "purple.900"
        }}
        _hover={{
          backgroundColor: "purple.900"
        }}
      >
        {title}
      </MenuButton>
      
      <MenuList 
        borderColor='purple.900'
        bg='gray.700'
        px={1.5}
      >
        {sortOptions.map((option, index) => (
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
    </Menu>
  );
};

export default SortButton;