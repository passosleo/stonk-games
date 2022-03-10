import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    Axios.get("https://www.freetogame.com/api/games").then(
      (response) => {
        setGames(response.data.slice(24, 42))
      }
    );
  }, [])
  console.log(games)
  return (
    <Flex
      direction='row'
      flexWrap='wrap'
      justifyContent='center'
    >
      {games.map((game, index) =>
        <Box
          key={index}
          m={5}
          transition='350ms'
          _hover={{
            transition: '350ms',
            transform: 'scale(1.07)'
          }}
        >
          <Box
            bg='gray.900'
            borderWidth={1}
            borderColor='purple.900'
            borderRadius={16}
            boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
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
              <Box
                borderBottomWidth={1}
                borderColor='purple.900'
              >
                <Image
                  w={80}
                  borderTopRadius={16}
                  src={game.thumbnail}
                />
              </Box>
            </Link>

            <Box px={3} pb={3}>
              <Text fontWeight='bold' my={2}>
                {game.title}
              </Text>

              <Flex
                direction='column'
                alignItems='flex-start'
                justifyContent='space-between'
                height={20}
              >
                <Text maxWidth={74} fontSize='sm'>
                  {game.short_description.length > 80
                    ? game.short_description.substring(0, 80) + '...'
                    : game.short_description}
                </Text>

                <Flex width='100%' justifyContent='space-between'>
                  <Text
                    p={1}
                    fontSize='2xs'
                    bg='gray.600'
                    borderRadius={8}
                  >
                    {game.genre}
                  </Text>

                  <Text
                    p={1}
                    fontSize='2xs'
                    // bg='gray.600'
                    borderRadius={8}
                  >
                    {game.platform}
                  </Text>
                </Flex>
              </Flex>
            </Box>

          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default Home;