import { Box, Typography } from "@mui/material";

import { labelFont, miniBox, totalFont } from "./StatisticsBox.style";

type BoxProps = {
  total: number;
  label: string;
};

const StatisticsBox = ({ total, label }: BoxProps) => {
  return (
    <Box sx={miniBox}>
      <Typography variant="h6" sx={totalFont}>
        {total}
      </Typography>
      <Typography variant="subtitle2" sx={labelFont}>
        {label}
      </Typography>
    </Box>
  );
};

export default StatisticsBox;
