import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, Flex, Grid, Icon, Spinner, Text } from "@chakra-ui/react";
import { AiOutlineSortAscending, AiOutlineClose } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { categories, platforms, sortOptions } from "../../static/data";
import GameCard from "../../components/GameCard";
import ListButton from "../../components/ListButton";
import CategorieTag from "../../components/CategorieTag";
import SimpleButton from "../../components/SimpleButton";
import Pagination from "../../components/Pagination";

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("");
  const [categorie, setCategorie] = useState("");
  const [platform, setPlatform] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 20;

  const selectedTag = useRef(null);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchGames = async () => {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: {
          platform: platform
            ? platform === "windows"
              ? "pc"
              : platform
            : "all",
          "sort-by": sort ? sort : "popularity",
        },
        headers: {
          "X-RapidAPI-Key":
            "1ca5fd28dcmsh301258a6dc830c5p1d5343jsn4a80fe14174e",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      if (categorie) {
        options.params.category = categorie;
      }

      setLoading(true);

      try {
        const response = await axios(options);
        setGames(response.data);
        setCurrentPage(1);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
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
        <Text flex={1} fontSize="xl" fontWeight="bold">
          Listing {games.length} free games
        </Text>

        <Grid templateColumns="repeat(3, auto)" gap={3}>
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
          {(categorie || sort || platform) && (
            <SimpleButton
              title="Clear"
              icon={<Icon as={AiOutlineClose} w={4} h={4} />}
              actionColor="red"
              onClick={() => clearFilters()}
            />
          )}
        </Grid>
      </Flex>

      {!loading ? (
        <>
          <Flex flexWrap="wrap" transition="800ms">
            {currentGames.map((game, index) => (
              <GameCard key={game.id || index} {...game} />
            ))}
          </Flex>

          <Pagination
            gamesPerPage={gamesPerPage}
            totalGames={games.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      ) : (
        <Flex justifyContent="center">
          <Spinner my={20} size="xl" color="purple.900" />
        </Flex>
      )}
    </Box>
  );
};

export default Home;
