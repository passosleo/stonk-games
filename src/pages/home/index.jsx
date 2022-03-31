import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import GameCard from "../../components/GameCard";
import FilterButton from "../../components/FilterButton";

const Home = () => {
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("");
  const [chande, setChange] = useState("");
  // console.log(filter);

  useEffect(() => {
    Axios.get("https://www.freetogame.com/api/games?platform=all&sort-by=popularity").then(
      (response) => {
        setGames(response.data.slice(14, 32))
      }
    );
  }, [])

  useEffect(() => {
    Axios.get(`https://www.freetogame.com/api/games?platform=all&sort-by=${filter}`).then(
      (response) => {
        setGames(response.data.slice(14, 32))
      }
    );
  }, [filter])


  return (
    <Box>
      <Flex>
        <FilterButton setFilter={setFilter} />
      </Flex>
      <Flex
        flexWrap='wrap'
        justifyContent='center'
      >
        {games.map((game, index) =>
          <GameCard
            key={game.id || index}
            {...game}
          />
        )}
      </Flex>
    </Box>
  );
};

export default Home;