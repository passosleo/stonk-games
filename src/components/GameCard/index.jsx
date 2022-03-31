import React, { useState } from "react";
import { Box, Flex, Link, Image, Icon, Text, HStack } from "@chakra-ui/react";
import { IoLogoWindows } from 'react-icons/io5';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

const GameCard = (game) => {
  const [favorite, setFavorite] = useState(null);

  // console.log(game)

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'PC (Windows)': return <Icon as={IoLogoWindows} w={6} h={6} color='gray.50' />;
      case 'Web Browser': return <Icon as={BiWorld} w={6} h={6} color='gray.50' />;
    }
  }

  return (
    <Flex
      direction='column'
      w={80}
      h={78}
      m={4}
      bg='gray.900'
      borderWidth={1}
      borderColor='purple.900'
      borderRadius={16}
      boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
      transition='350ms'
      _hover={{
        transition: '350ms',
        transform: 'scale(1.07)'
      }}
    >

      <Box
        borderBottomWidth={1}
        borderColor='purple.900'
      >
        <Link
          href={game.game_url}
          _active={{
            boxShadow: 'none'
          }}
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Image
            borderTopRadius={16}
            src={game.thumbnail}
          />
        </Link>
      </Box>

      <Flex
        h='100%'
        direction='column'
        justifyContent='space-between'
        px={3}
        pt={1.5}
        pb={3}
      >
        <Flex justifyContent='space-between'>
          <Text fontWeight='bold'>
            {game.title}
          </Text>

          <Icon
            as={favorite === game.id ? AiFillStar : AiOutlineStar}
            w={5}
            h={5}
            color='gray.50'
            _hover={{ cursor: 'pointer' }}
            onClick={() => setFavorite(game.id)}
          />

        </Flex>

        <Text fontSize='sm'>
          {game.short_description.length > 80
            ? game.short_description.substring(0, 80) + '...'
            : game.short_description}
        </Text>

        <Flex
          alignItems='center'
          justifyContent='space-between'
        >
          <HStack>
            <Text
              p={0.5}
              fontSize='2xs'
              bg='gray.600'
              borderRadius={4}
            >
              {game.genre}
            </Text>
            <Text
              p={0.5}
              fontSize='2xs'
              bg='blue'
              borderRadius={4}
            >
              Free
            </Text>
          </HStack>

          <Text
            fontSize='2xs'
            borderRadius={8}
          >
            {getPlatformIcon(game.platform)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GameCard;