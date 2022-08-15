import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import {Rating} from "@material-ui/lab";
import useStyles from './style';

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');

    return ( 
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCC8ZbRDAoOnHSnZ9QXP5g1RCdRh1Wgi48'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    console.log(e)
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
            >
                {
                    places?.map((place, i) => (
                        <div 
                            className={classes.markerContainer}
                            lat={isNaN(Number(place.latitude)) ? 0 : Number(place.latitude)}
                            lng={isNaN(Number(place.longitude)) ? 0 : Number(place.longitude)}
                            key={i}
                        >
                            {
                                !isDesktop ? (
                                    <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                                ) : (
                                    <Paper elevation={3} className={classes.paper} >
                                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                            {place.name}
                                        </Typography>
                                        <img
                                            className={classes.pointer}
                                            src={place.photo ? place.photo.images.original.url : ''}
                                            alt={place.name}
                                        />
                                        <Rating size="small" value={Number(place.rating)} readOnly ></Rating>
                                    </Paper>
                                )
                            }
                        </div>
                    ))
                }
            </GoogleMapReact>
        </div>
    )
}

export default Map;