import React, { useState } from "react";
import { Box, Flex, Link, Image, Button, Icon, Text, HStack, Menu, MenuButton, MenuList, MenuItem, Tag } from "@chakra-ui/react";

const CategorieTag = ({ categories, setCategorie }) => {
  const [selected, setSelected] = useState();
  return (
    <Flex flexWrap="wrap">
      {categories.map((item, index) => (
        <Tag
          key={item.id || index}
          p={1.5}
          m={1.5}
          mx={selected === item.label ? 3 : 1.5}
          borderWidth={selected === item.label ? 1 : 0}
          fontWeight={selected === item.label ? 'bold' : 'normal'}
          color="white"
          bg="purple.900"
          cursor="pointer"
          boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
          transition='200ms'
          transform={selected === item.label ? 'scale(1.20)' : 'scale(1)'}
          
          // _hover={{
          //   transition: '200ms',
          //   transform: 'scale(1.07)'
          // }}
          onClick={() => {
            setCategorie(item.label.toLowerCase());
            setSelected(item.label)
          }}
        >
          {item.label}
        </Tag>
      ))}
    </Flex>
  );
};

export default CategorieTag;