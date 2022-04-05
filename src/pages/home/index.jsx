import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import { AiOutlineSortAscending } from 'react-icons/ai';
import GameCard from "../../components/GameCard";
import SortButton from "../../components/SortButton";

const Home = () => {
  const [games, setGames] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    Axios.get(`https://www.freetogame.com/api/games?platform=all&sort-by=${sort ? sort : "popularity"}`).then(
      (response) => {
        setGames(response.data.slice(14,28))
      }
    );
  }, [sort]);

  return (
    <Box>
      <Flex>
        <SortButton
          title="Sort"
          onHeader={false}
          icon={AiOutlineSortAscending}
          setSort={setSort}
        />
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