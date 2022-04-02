import React from "react";
import { Button, Icon, Menu, MenuButton } from "@chakra-ui/react";
import ListMenu from '../ListMenu'

const FilterButton = ({ title, icon, setFilter }) => {
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
      <ListMenu 
        setFilter={setFilter}
        options={[
          {id: 1, label: "Alphabetical"},
          {id: 2, label: "Popularity"},
          {id: 3, label: "Release-Date"},
          {id: 4, label: "Relevant"}
        ]} 
      />
    </Menu>
  );
};

export default FilterButton;