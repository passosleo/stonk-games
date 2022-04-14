import React from "react";
import { Box, Divider, Flex, Icon, HStack, Text, Image } from "@chakra-ui/react";
import { IoExitOutline, IoPersonOutline } from 'react-icons/io5'
import { AiOutlineStar } from 'react-icons/ai';
// import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"
import SearchInput from "../components/SearchInput";

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
        zIndex={10}
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
          <Image w={70} src={Logo} alt="Website Logo" />

          <SearchInput />

          <HStack spacing={5} h='100%'>
            <HStack>
              <Text>Favorites</Text>
              <Icon as={AiOutlineStar} w={5.5} h={5.5} color='gray.50' />
            </HStack>

            <Divider orientation='vertical' h='25%' opacity={0.2}/>

            <HStack>
              <Text>Profile</Text>
              <Icon as={IoPersonOutline} w={4.5} h={4.5} color='gray.50' />
            </HStack>

            <Divider orientation='vertical' h='25%' opacity={0.2}/>

            <HStack>
              <Text>Logout</Text>
              <Icon as={IoExitOutline} w={5.5} h={5.5} color='gray.50' />
            </HStack>
          </HStack>
        </Flex>

      </Flex>
      <Flex minHeight="calc(100vh - 80px)" justifyContent="center" bg='gray.800' mt={20} p={10}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;