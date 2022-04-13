import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Flex, Tag } from "@chakra-ui/react";

const CategorieTag = forwardRef(({ categories, setCategorie }, ref) => {
  const [selected, setSelected] = useState("");

  useImperativeHandle(ref, () => ({
    clearSelectedTag() {
      setSelected("");
    },
  }));

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
});

export default CategorieTag;