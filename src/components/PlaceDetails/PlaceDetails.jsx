import React from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import useStyles from './style'

const PlaceDetails = ({place}) => {
    // let placeImageUrl = "";
    const classes = useStyles();
    const placeImageUrl = place?.photo?.images.original.url;
    return ( 
        <Card className={classes.card}>
            <CardMedia
                component="img"
                height="140"
                image={placeImageUrl}
                alt={place.name}
                className={classes.cardMedia}
            ></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="div" gutterBottom>{place.name}</Typography>
                <Box display="flex" flexDirection="row" className={classes.boxRating}>
                        <Rating readOnly value={Number(place.rating)} precision={0.5}></Rating>
                    {/* <Box>
                    </Box>
                    <Box className={classes.boxNumReviews}>
                        Out of {place.num_reviews} reviews
                    </Box> */}
                    <Typography variant="subtitle1" gutterBottom>Out of {place.num_reviews} reviews</Typography>
                </Box>

            </CardContent>
        </Card>
    )
}

export default PlaceDetails;