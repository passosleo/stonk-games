import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Divider, Flex, HStack } from "@chakra-ui/react";
import { AiOutlineSortAscending } from 'react-icons/ai';
import GameCard from "../../components/GameCard";
import SortButton from "../../components/SortButton";
import { categories } from "../../static/data"
import CategorieTag from "../../components/CategorieTag";

const Home = () => {
  const [games, setGames] = useState([]);
  const [sort, setSort] = useState("");
  const [categorie, setCategorie] = useState("");

  useEffect(() => {
    axios.get(`https://www.freetogame.com/api/games?platform=all${categorie && "&category=" + categorie}&sort-by=${sort ? sort : "popularity"}`)
      .then((response) => {
        setGames(response.data.slice(0,10));
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort, categorie])

  // const fetchGames = async () => {
  //   try {
  //     const data = await axios.get(`https://www.freetogame.com/api/games?platform=all&sort-by=${filter ? filter : "popularity"}`);
  //     setGames(data.slice(14,28));
  //   } catch (error) {
  //     console.log(error);
  //   };
  // };

  // useEffect(() => {
  //   fetchGames();
  // }, [filter])

  return (
    <Box>
      <HStack>
        <CategorieTag
          categories={categories}
          setCategorie={setCategorie}
        />
        <SortButton
          title="Sort"
          onHeader={false}
          icon={AiOutlineSortAscending}
          setSort={setSort}
        />
      </HStack>
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