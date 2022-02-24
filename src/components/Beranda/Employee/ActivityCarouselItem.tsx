import { Box, Grid } from "@mui/material";
import { outerContItem } from "./ActivityCarousel.style";
import ActivityItemCard from "./ActivityItemCard";

export type Item = {
  date: Date;
  item: string;
  status: string;
};

type ActivityItem = {
  items: Item[];
};

const ActivityCarouselItem = ({ items }: ActivityItem) => {
  return (
    <Box sx={outerContItem}>
      <Grid container>
        <Grid item md={4}>
          <ActivityItemCard item={items[0]} />
        </Grid>

        {items[1] && (
          <Grid item md={4}>
            <ActivityItemCard item={items[1]} />
          </Grid>
        )}

        {items[2] && (
          <Grid item md={4}>
            <ActivityItemCard item={items[2]} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ActivityCarouselItem;
