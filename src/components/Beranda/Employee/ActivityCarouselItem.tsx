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
  const getGridItem = () => {
    if (window.innerWidth <= 600) {
      return (
        <Grid item md={4} xs={12}>
          <ActivityItemCard item={items} />
        </Grid>
      );
    }

    if (600 < window.innerWidth && window.innerWidth <= 900) {
      return (
        <>
          <Grid item sm={6} xs={12}>
            <ActivityItemCard item={items[0]} />
          </Grid>

          {items[1] && (
            <Grid item sm={6} xs={12}>
              <ActivityItemCard item={items[1]} />
            </Grid>
          )}
        </>
      );
    }

    return (
      <>
        <Grid item md={4} xs={12}>
          <ActivityItemCard item={items[0]} />
        </Grid>

        {items[1] && (
          <Grid item md={4} xs={12}>
            <ActivityItemCard item={items[1]} />
          </Grid>
        )}

        {items[2] && (
          <Grid item md={4} xs={12}>
            <ActivityItemCard item={items[2]} />
          </Grid>
        )}
      </>
    );
  };

  return (
    <Box sx={outerContItem}>
      <Grid container>{getGridItem()}</Grid>
    </Box>
  );
};

export default ActivityCarouselItem;
