import React, { useState } from "react";
import { Box, Flex, Link, Image, Button, Icon, Text, HStack, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IoLogoWindows } from 'react-icons/io5';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

const FilterButton = ({ setFilter }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon as={AiOutlineSortAscending} w={6} h={6} />}
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
        Filter
      </MenuButton>
      <MenuList borderColor='purple.900' bg='gray.700'>
        <MenuItem
          _hover={{ background: 'purple.900' }}
          _focus={{ background: 'purple.900' }}
          onClick={() => setFilter("alphabetical")}
        >
          Alphabetical
        </MenuItem>
        <MenuItem
          _hover={{ background: 'purple.900' }}
          _focus={{ background: 'purple.900' }}
          onClick={() => setFilter("popularity")}
        >
          Popularity
        </MenuItem>
        <MenuItem
          _hover={{ background: 'purple.900' }}
          _focus={{ background: 'purple.900' }}
          onClick={() => setFilter("release-date")}
        >
          Release Date
        </MenuItem>
        <MenuItem
          _hover={{ background: 'purple.900' }}
          _focus={{ background: 'purple.900' }}
          onClick={() => setFilter("relevance")}
        >
          Relevance
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default FilterButton;