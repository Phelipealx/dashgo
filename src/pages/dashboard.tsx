import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      new Date("2022-06-22T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-23T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-24T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-25T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-26T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-27T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-28T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-29T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-30T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-31T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      new Date("2022-06-32T00:00:00.000Z").toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  { name: "series", data: [25, 74, 69, 85, 12, 2, 74, 63, 4, 78, 50] },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" pb="4">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} series={series} options={options} />
          </Box>
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} series={series} options={options} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
