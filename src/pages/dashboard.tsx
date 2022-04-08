import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../Components/Header";
import dynamic from "next/dynamic";
import { Sidebar } from "../Components/Sidebar";

// Desligar o carregamento via servidor da importação do Chart
const Charts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Estilo do Gráfico
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },

  grid: {
    show: false,
  },

  dataLabels: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-04-01T00:00:000Z",
      "2022-04-02T00:00:000Z",
      "2022-04-03T00:00:000Z",
      "2022-04-04T00:00:000Z",
      "2022-04-05T00:00:000Z",
      "2022-04-06T00:00:000Z",
      "2022-04-07T00:00:000Z",
    ],
  },
};

const series = [{ name: "series1", data: [31, 120, 28, 61, 18, 29, 189] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignContent="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4" pb="4">
              Inscritos da Semana
            </Text>
            <Charts
              options={options}
              series={series}
              type="area"
              height={140}
            />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
            <Charts
              options={options}
              series={series}
              type="area"
              height={140}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
