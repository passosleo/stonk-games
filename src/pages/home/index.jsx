import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, Divider, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineSortAscending, AiOutlineClose } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import GameCard from "../../components/GameCard";
import SortButton from "../../components/SortButton";
import { categories } from "../../static/data"
import CategorieTag from "../../components/CategorieTag";
import SimpleButton from "../../components/SimpleButton";

const Home = () => {
  const [games, setGames] = useState([]);
  const [sort, setSort] = useState("");
  const [categorie, setCategorie] = useState("");

  const selectedTag = useRef(null);

  useEffect(() => {
    axios.get(`https://www.freetogame.com/api/games?platform=all${categorie && "&category=" + categorie}&sort-by=${sort ? sort : "popularity"}`)
      .then((response) => {
        setGames(response.data.slice(0, 16));
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort, categorie])

  const clearFilters = () => {
    setSort("");
    setCategorie("");
    selectedTag.current.clearSelectedTag();
  }

  return (
    <Box maxWidth="1200px">
      <CategorieTag
        categories={categories}
        setCategorie={setCategorie}
        ref={selectedTag}
      />
      <Flex alignItems="center" my={5}>
        <Text flex={1} fontSize="xl" fontWeight="bold">Listing {games.length} free games</Text>

        <HStack flex={1} justifyContent="flex-end">
          <SortButton
            title="Sort"
            icon={AiOutlineSortAscending}
            setSort={setSort}
          />
          <SortButton
            title="Platform"
            icon={IoGameControllerOutline}
          // setSort={setSort}
          />
          <SimpleButton
            title="Clear Filters"
            icon={<Icon as={AiOutlineClose} w={4} h={4} />}
            onClick={() => clearFilters()}
          />
        </HStack>
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