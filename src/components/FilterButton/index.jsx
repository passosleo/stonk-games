import React, { useState } from "react";
import { Box, Flex, Link, Image, Button, Icon, Text, HStack, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IoLogoWindows } from 'react-icons/io5';
import { BiWorld } from 'react-icons/bi';

const FilterButton = ({ title, icon, options, setFilter }) => {
  console.log(options)
  return (
    <Menu>
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
    </Menu>
  );
};

export default FilterButton;