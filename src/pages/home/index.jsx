import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    Axios.get("https://www.freetogame.com/api/games").then(
      (response) => {
        setGames(response.data.slice(14, 32))
      }
    );
  }, [])
  console.log(games)
  return (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
    >
      {games.map((game, index) =>
        <Flex
          key={game.id || index}
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
            <Text fontWeight='bold'>
              {game.title}
            </Text>

            <Text fontSize='sm'>
              {game.short_description.length > 80
                ? game.short_description.substring(0, 80) + '...'
                : game.short_description}
            </Text>

            <Flex alignItems='center' justifyContent='space-between'>
              <Text
                p={1}
                fontSize='2xs'
                bg='gray.600'
                borderRadius={8}
              >
                {game.genre}
              </Text>

              <Text
                fontSize='2xs'
                borderRadius={8}
              >
                {game.platform}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Home;