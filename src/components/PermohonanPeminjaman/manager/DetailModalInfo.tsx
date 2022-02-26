import { Typography } from "@mui/material";

import { labelFont, descriptionFont } from "./DetailModalInfo.style";

type Info = {
  label: string;
  description: string;
};

const DetailActivityInfo = ({ label, description }: Info) => {
  return (
    <>
      <Typography variant="subtitle1" sx={labelFont}>
        {label}
      </Typography>
      <Typography gutterBottom variant="subtitle1" sx={descriptionFont}>
        {description}
      </Typography>
    </>
  );
};

export default DetailActivityInfo;
