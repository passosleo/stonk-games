import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Box>
      <Button bg="cyan.200">
        <Link to="/">Home</Link>
      </Button>
      {children}
    </Box>
  );
};

export default Layout;