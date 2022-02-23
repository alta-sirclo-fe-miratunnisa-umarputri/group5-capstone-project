import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

import {
  avatar,
  avatarGrid,
  bottomCont,
  card,
  cardActions,
  dateFont,
  dot,
  itemFont,
  statusBox,
  statusFont,
  statusGrid,
} from "./ActivityCarousel.style";

const displayWord = (word: string) => {
  if (word.length > 13) {
    const theWord = word.slice(0, 12);
    return `${theWord}...`;
  }

  return word;
};

const ActivityItemCard = ({ item }: any) => {
  const handleClick = () => {
    console.log("masuk");
  };

  return (
    <Card sx={card}>
      <Grid container>
        <Grid item xs={3} sx={avatarGrid}>
          <Avatar
            src="https://source.unsplash.com/random"
            alt="Item"
            sx={avatar}
          />
        </Grid>

        <Grid item xs={9}>
          <CardContent>
            <Typography variant="body2" sx={dateFont}>
              {item.date.toLocaleString()}
            </Typography>
            <Typography variant="h6" sx={itemFont}>
              {displayWord(item.item)}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container sx={bottomCont}>
        <Grid item xs={9} sx={statusGrid}>
          <Box sx={statusBox}>
            <Typography sx={statusFont}>{item.status}</Typography>
          </Box>
        </Grid>

        <Grid item xs={3} sx={statusGrid}>
          <CardActions sx={cardActions}>
            <IconButton edge="end" onClick={handleClick}>
              <MoreHorizRoundedIcon fontSize="medium" sx={dot} />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ActivityItemCard;
