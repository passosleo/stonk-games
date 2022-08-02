import React from "react";
import { Text } from "@chakra-ui/react";

const Tag = ({ title, color = "gray.600" }) => {
  return (
    <Text p={0.5} fontSize="2xs" bg={color} borderRadius={4}>
      {title}
    </Text>
  );
};

export default Tag;
