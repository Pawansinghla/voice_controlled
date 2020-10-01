import React from "react";
import {
  Card,
  CardActionArea,
  CardAction,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@material-ui/core";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage }, i,}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={urlToImage} />
        <div>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography gutterBottom variant="h5">
          {" "}
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardAction>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}{" "}
        </Typography>
      </CardAction>
    </Card>
  );
};
export default NewsCard;
