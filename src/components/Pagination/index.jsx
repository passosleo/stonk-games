import React from "react";
import { Button, HStack } from "@chakra-ui/react";

const Pagination = ({ gamesPerPage, totalGames, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <HStack my={10} justifyContent="center">
      {pageNumbers.length > 1 &&
        pageNumbers.map((number) => (
          <Button
            key={number}
            bg={number === currentPage ? "purple.900" : "gray.900"}
            maxWidth={10}
            _hover={{ backgroundColor: "gray.700" }}
            _active={{ backgroundColor: "gray.700" }}
            onClick={() => {
              paginate(number);
              scrollToTop();
            }}
          >
            {number}
          </Button>
        ))}
    </HStack>
  );
};

export default Pagination;
