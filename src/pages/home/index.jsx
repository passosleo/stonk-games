import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { AiOutlineSortAscending, AiOutlineClose } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { categories, platforms, sortOptions } from "../../static/data"
import GameCard from "../../components/GameCard";
import ListButton from "../../components/ListButton";
import CategorieTag from "../../components/CategorieTag";
import SimpleButton from "../../components/SimpleButton";

const Home = () => {
  const [games, setGames] = useState([]);
  const [sort, setSort] = useState("");
  const [categorie, setCategorie] = useState("");
  const [platform, setPlatform] = useState("");
  const selectedTag = useRef(null);

  useEffect(() => {
    axios.get("https://www.freetogame.com/api/games?"
      + `platform=${platform ? platform === "windows" ? "pc" : platform : "all"}`
      + `${categorie && "&category=" + categorie}`
      + `&sort-by=${sort ? sort : "popularity"}`)
      .then((response) => {
        setGames(response.data.slice(0, 16));
        console.log(response.data.slice(0, 16))
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort, categorie, platform]);

  const clearFilters = () => {
    setSort("");
    setCategorie("");
    setPlatform("");
    selectedTag.current.clearSelectedTag();
  };

  return (
    <Box maxWidth="1200px">
      <CategorieTag
        categories={categories}
        setCategorie={setCategorie}
        ref={selectedTag}
      />
      <Flex alignItems="center" my={5}>
        <Text
          flex={1}
          fontSize="xl"
          fontWeight="bold"
        >
          Listing {games.length} free games
        </Text>

        <Grid templateColumns='repeat(3, auto)' gap={3}>
          <ListButton
            title="Sort"
            icon={<Icon as={AiOutlineSortAscending} w={5} h={5} />}
            data={sortOptions}
            onClick={setSort}
            isSelected={sort}
          />
          <ListButton
            title="Platform"
            icon={<Icon as={IoGameControllerOutline} w={5} h={5} />}
            data={platforms}
            onClick={setPlatform}
            isSelected={platform}
          />
          {(categorie || sort || platform) &&
            <SimpleButton
              title="Clear"
              icon={<Icon as={AiOutlineClose} w={4} h={4} />}
              actionColor="red"
              onClick={() => clearFilters()}
            />
          }
        </Grid>
      </Flex>
      <Flex
        flexWrap='wrap'
        justifyContent='center'
        transition='800ms'
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