import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

export default function MissionCard({ data }) {
  const {
    links,
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    launch_success,
    launch_date_utc
  } = data;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className="card">
        <CardMedia
          className="image"
          image={links.mission_patch}
          title="Paella dish"
          alt="Image"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="header"
          >
            {mission_name} #{flight_number}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <label>Mission ids: </label>
            <ul>
              {mission_id.length > 0 ? (
                mission_id.map(mission => <li>{mission}</li>)
              ) : (
                <span>No mission id assigned</span>
              )}
            </ul>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <label>Launch year:</label> {launch_year}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <label>Successful Launch:</label> {launch_success.toString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <label>Launch date:</label> {launch_date_utc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
