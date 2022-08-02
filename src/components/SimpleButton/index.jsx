import React from "react";
import { Button } from "@chakra-ui/react";

const SimpleButton = ({ title, icon, onClick, actionColor }) => {
  return (
    <Button
      rightIcon={icon}
      minWidth={25}
      backgroundColor="gray.900"
      borderWidth={1}
      borderColor="purple.900"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      _active={{
        backgroundColor: actionColor,
        borderColor: actionColor,
      }}
      _hover={{
        backgroundColor: actionColor,
        borderColor: actionColor,
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default SimpleButton;
