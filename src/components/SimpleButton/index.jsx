import React, { useState } from "react";
import { Button, Flex, Tag } from "@chakra-ui/react";

const SimpleButton = ({ title, icon, onClick }) => {
  return (
    <Button
      rightIcon={icon}
      minWidth={25}
      backgroundColor="gray.900"
      borderWidth={1}
      borderColor='purple.900'
      boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
      _active={{
        backgroundColor: "red",
        borderColor: "red"
      }}
      _hover={{
        backgroundColor: "red",
        borderColor: "red"
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default SimpleButton;