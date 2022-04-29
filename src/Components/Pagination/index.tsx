import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}
const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  registersPerPage = 10,
  totalCountOfRegisters,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  // Última página possível
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  //Renderizar páginas irmãs(siblings)
  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage > 1
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      justify="space-between"
      align="center"
      direction={["column", "row"]}
      mt="4"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {/* Páginas anteriores */}
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {/* Se existem duas páginas de distância da currnet */}
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" align="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {/* Páginas posteriores */}
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage > siblingsCount - lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" align="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
