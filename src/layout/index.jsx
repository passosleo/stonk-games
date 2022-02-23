import React from "react";
import { Box, Button, Divider, Flex, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, Icon, HStack, Text, Image } from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineLogout } from 'react-icons/ai'
import { IoExitOutline, IoPersonOutline } from 'react-icons/io5'
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"

const Layout = ({ children }) => {
  return (
    <Box color='gray.50'>
      <Flex
        bg='gray.900'
        h={22}
        position='fixed'
        top={0}
        left={0}
        right={0}
        zIndex={1}
        borderBottomWidth={1}
        borderColor='purple.900'
        justifyContent='center'
      >
        <Flex
          w='100%'
          alignItems='center'
          justifyContent='space-between'
          px='5%'
          maxWidth='1440px'
        >
          <Image w={70} src={Logo} />

          <Text>Games</Text>

          <Text>Favorites</Text>

          <InputGroup
            size='sm'
            w={80}
            borderColor='purple.900'
            _onFocus={{
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            <Input
              placeholder='Pesquisar'
              bg='gray.50'
              color='gray.900'
              borderRadius={8}
            />
            <InputRightAddon
              borderRadius={8}
              bg='purple.900'
              children={
                <Icon as={AiOutlineSearch} w={5} h={5} color='gray.50' />
              }
            />
          </InputGroup>

          <HStack spacing={5} h='100%'>
            <HStack>
              <Text>Profile</Text>
              <Icon as={IoPersonOutline} w={6} h={6} color='gray.50' />
            </HStack>
            <Divider orientation='vertical' h='40%' />
            <HStack>
              <Text>Logout</Text>
              <Icon as={IoExitOutline} w={7} h={7} color='gray.50' />
            </HStack>
          </HStack>
        </Flex>

      </Flex>
      <Box bg='gray.800' mt={20} p={10}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;