import { Typography } from "@mui/material";
import CarouselMUI from "react-material-ui-carousel";

import { dummyActivity } from "../../../dummy-data";
import { activityCarousel, titleCarousel } from "./ActivityCarousel.style";
import ActivityCarouselItem from "./ActivityCarouselItem";

type Item = {
  date: Date;
  item: string;
  status: string;
};

const ActivityCarousel = () => {
  const groupData = (data: any[]) => {
    if (window.innerWidth <= 600) {
      return data;
    }

    let total = 3;

    if (600 < window.innerWidth && window.innerWidth <= 900) {
      total = 2;
    }

    const groups = [];
    let tmp = [];
    for (let i = 0; i < data.length; i++) {
      if (tmp.length === total) {
        groups.push(tmp);
        tmp = [data[i]];
      } else {
        tmp.push(data[i]);
      }
    }

    if (tmp.length) {
      groups.push(tmp);
    }

    return groups;
  };

  return (
    <>
      <Typography variant="h6" sx={titleCarousel}>
        Aktivitasmu
      </Typography>
      <CarouselMUI
        autoPlay={false}
        interval={3e3}
        navButtonsAlwaysVisible
        animation="slide"
        duration={1e3}
        sx={activityCarousel}
        indicators={false}
        fullHeightHover={false}
      >
        {groupData(dummyActivity as Item[]).map((activity, i) => (
          <ActivityCarouselItem key={i} items={activity as unknown as Item[]} />
        ))}
      </CarouselMUI>
    </>
  );
};

export default ActivityCarousel;
