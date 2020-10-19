import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Filters({ filters, heading, onSelect, activeFilter }) {
  return (
    <Grid container spacing={1} className="filter">
      <Grid xs={12}>
        <Typography variant="h6" className="heading" gutterBottom>
          {heading}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {filters.length &&
          filters.map((filter, idx) => (
            <Grid container item xs={12} spacing={3} className="no-margin">
              {Object.keys(filter).length &&
                Object.keys(filter).map(it => {
                  return (
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        className={`filter-button ${filter[it] ===
                          activeFilter && "active"}`}
                        id={idx}
                        onClick={() => onSelect(filter[it])}
                      >
                        {filter[it]}
                      </Button>
                    </Grid>
                  );
                })}
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}

export default Filters;
