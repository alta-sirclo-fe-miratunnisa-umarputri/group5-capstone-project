import { Box } from "@mui/material";
import { carouselItem } from "./Carousel.style";

type DetailItem = {
  url: string;
};

type Item = {
  item: DetailItem;
};

const CarouselItem = ({ item }: Item) => {
  return <Box sx={{ ...carouselItem, backgroundImage: `url(${item.url})` }} />;
};

export default CarouselItem;
