import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { capstoneAxios } from "../../axios-instance";
import Loading from "../Loading";
import {
  botInnContainer,
  outerContainer,
  topInnContainer,
} from "./Statistics.style";
import StatisticsBox from "./StatisticsBox";

const Statistics = () => {
  const { data, isLoading } = useQuery("getStatistics", async () => {
    const { data } = await capstoneAxios({
      method: "GET",
      url: "/statistics",
    });

    return data;
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Box sx={outerContainer}>
        <Box sx={topInnContainer}>
          <StatisticsBox total={data.data.totalAsset} label="Total Aset" />
          <StatisticsBox
            total={data.data.totalMaintenance}
            label="Pemeliharaan"
          />
        </Box>

        <Box sx={botInnContainer}>
          <StatisticsBox total={data.data.totalUsed} label="Digunakan" />
          <StatisticsBox total={data.data.totalAvailable} label="Tersedia" />
        </Box>
      </Box>
    </>
  );
};

export default Statistics;
