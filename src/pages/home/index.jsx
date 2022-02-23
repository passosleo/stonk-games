import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    Axios.get("https://www.freetogame.com/api/games?platform=pc").then(
      (response) => {
        setGames(response.data.slice(0, 18))
      }
    );
  }, [])
  console.log(games)
  return (
    <Flex direction='row' flexWrap='wrap' justifyContent='center'>
      
      {games.map((game, index) =>
        <Flex
          key={index}
          direction='column'
          p={5}
          transition='350ms'
          _hover={{
            transition: '350ms',
            transform: 'scale(1.07)'
          }}
        >
          <Link
            href={game.game_url}
            _active={{
              boxShadow: 'none'
            }}
            _hover={{
              textDecoration: 'none'
            }}>
            <Image w={80} borderRadius={10} src={game.thumbnail}></Image>
            <Text fontWeight='bold' my={1}>{game.title}</Text>
            <Text maxWidth={80}>
              {game.short_description.length > 100
                ? game.short_description.substring(0, 100) + '...'
                : game.short_description}
            </Text>
          </Link>
        </Flex>
      )}

    </Flex>
  );
};

export default Home;