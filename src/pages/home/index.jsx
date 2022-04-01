import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import { AiOutlineSortAscending } from 'react-icons/ai';
import GameCard from "../../components/GameCard";
import FilterButton from "../../components/FilterButton";

const Home = () => {
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    Axios.get(`https://www.freetogame.com/api/games?platform=all&sort-by=${filter ? filter : "popularity"} `).then(
      (response) => {
        setGames(response.data.slice(14, 32))
      }
    );
  }, [filter])

  return (
    <Box>
      <Flex>
        <FilterButton
          title="Filter"
          onHeader={false}
          icon={AiOutlineSortAscending}
          setFilter={setFilter}
          options={[
            {id: 1, label: "Alphabetical"},
            {id: 2, label: "Popularity"},
            {id: 3, label: "Release-Date"},
            {id: 4, label: "Relevant"}
          ]}
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