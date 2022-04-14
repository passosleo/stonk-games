import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";

const ListButton = ({ title, icon, data, onClick, isSelected }) => {
  return (
    <Menu maxWidth={35} >
      <MenuButton
        as={Button}
        rightIcon={icon}
        minWidth={25}
        backgroundColor={isSelected ? "purple.900" : "gray.900"}
        borderWidth={1}
        borderColor={isSelected ? "gray.50" : "purple.900"}
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
        borderRadius={12}
        bg='gray.700'
        px={1.5}
      >
        {data ? data.map((option, index) => {
          const label = option.label.toLowerCase();
          return (
            <MenuItem
              key={option.id || index}
              borderRadius={12}
              bg={isSelected === label ? 'gray.600' : 'gray.700'}
              _hover={{ backgroundColor: isSelected === label ? 'gray.600' : 'transparent' }}
              _focus={{ backgroundColor: isSelected === label ? 'gray.600' : 'transparent' }}
              onClick={() => onClick(label)}
            >
              {option.label}
            </MenuItem>
          )
        }) : <Text>No content</Text>}
      </MenuList>
    </Menu>
  );
};

export default ListButton;