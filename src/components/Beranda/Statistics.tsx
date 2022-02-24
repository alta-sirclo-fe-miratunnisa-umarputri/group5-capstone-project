import { Box } from "@mui/material";
import {
  botInnContainer,
  outerContainer,
  topInnContainer,
} from "./Statistics.style";
import StatisticsBox from "./StatisticsBox";

const Statistics = () => {
  return (
    <>
      <Box sx={outerContainer}>
        <Box sx={topInnContainer}>
          <StatisticsBox total={102} label="Total Aset" />
          <StatisticsBox total={93} label="Pemeliharaan" />
        </Box>

        <Box sx={botInnContainer}>
          <StatisticsBox total={310} label="Digunakan" />
          <StatisticsBox total={22} label="Tersedia" />
        </Box>
      </Box>
    </>
  );
};

export default Statistics;
