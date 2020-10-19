import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Filters from "./Filters";
import { YEARS, BOOLEAN } from "./constants";
import axiosInstance from "../../axios";
import MissionCard from "./MissionCard";
import querystring from "querystring";

const Landing = ({ history }) => {
  const [data, setData] = useState([]);
  const [launch_year, setYear] = useState();
  const [launch_status, setLaunchStatus] = useState();
  const [landing_status, setLandingStatus] = useState();
  useEffect(() => {
    axiosInstance.get().then(res => {
      setData(res.data);
    });
    history.push("/");
  }, []);

  const getParams = params => {
    let newParams = {};
    Object.keys(params).forEach(key => {
      if (params[key]) newParams = { ...newParams, [key]: params[key] };
    });
    return newParams;
  };

  const getRoute = params => {
    return querystring.stringify(params);
  };

  const selectYear = selectedYear => {
    if (selectedYear === launch_year) {
      const params = getParams({
        launch_status,
        landing_status
      });
      history.push(`/?${getRoute(params)}`);
      setYear(undefined);
      axiosInstance.get(params).then(res => {
        setData(res.data);
      });
    } else {
      const params = getParams({
        launch_year: selectedYear,
        launch_status,
        landing_status
      });
      history.push(`/?${getRoute(params)}`);
      setYear(selectedYear);
      axiosInstance.get(params).then(res => {
        setData(res.data);
      });
    }
  };

  const selectLaunchStatus = selectedFilter => {
    if (selectedFilter === launch_status) {
      const params = getParams({
        launch_year,
        landing_status
      });
      history.push(`/?${getRoute(params)}`);
      setLaunchStatus(undefined);
      axiosInstance.get(params).then(res => {
        setData(res.data);
      });
    } else {
      setLaunchStatus(selectedFilter);
      const params = getParams({
        launch_year,
        launch_status: selectedFilter,
        landing_status
      });
      history.push(`/?${getRoute(params)}`);
      axiosInstance.get(params).then(res => {
        setData(res.data);
      });
    }
  };

  const selectLandingStatus = selectedFilter => {
    setLandingStatus(selectedFilter);
    if (selectedFilter === landing_status) {
      setLandingStatus(undefined);
      const params = getParams({
        launch_year,
        launch_status
      });
      history.push(`/?${getRoute(params)}`);
      axiosInstance.get(params).then(res => {
        setData(res.data);
      });
    } else {
      setLandingStatus(selectedFilter);
      const params = getParams({
        launch_year,
        launch_status,
        landing_status: selectedFilter
      });
      history.push(`/?${getRoute(params)}`);
      axiosInstance.get(params).then(res => {
        setData(res.data);
      });
    }
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4} md={2}>
        <Paper className="filter-wrapper">
          <Typography variant="h5" gutterBottom>
            Filters
          </Typography>
          <Filters
            filters={YEARS}
            activeFilter={launch_year}
            heading="Launch Year"
            onSelect={selectYear}
          />
          <Filters
            filters={BOOLEAN}
            activeFilter={launch_status}
            heading="Successful Launch"
            onSelect={selectLaunchStatus}
          />
          <Filters
            filters={BOOLEAN}
            activeFilter={landing_status}
            heading="Successful Landing"
            onSelect={selectLandingStatus}
          />
        </Paper>
      </Grid>
      <Grid item container xs={12} sm={8} md={10} spacing={2}>
        {data.length > 0 ? (
          data.map(it => <MissionCard data={it} />)
        ) : (
          <Typography variant="h5">No data available</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Landing;
