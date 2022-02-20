import { Box, Container } from "@mui/material";

import { primary } from "../styles/color.styles";
import { ContainerContent } from "../types/container";

const ContentContainer = ({ children }: ContainerContent) => {
  return (
    <Box sx={{ px: 5, pb: 2 }}>
      <Container maxWidth="xl" sx={{ ...primary, fontFamily: "Poppins" }}>
        {children}
      </Container>
    </Box>
  );
};

export default ContentContainer;
