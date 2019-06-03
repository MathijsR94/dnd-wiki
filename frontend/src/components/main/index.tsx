import React from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core";
import { WithStyles } from "@material-ui/styles";
import { Switch, Route } from "react-router";
import CreateCampaignForm from "../campaign/Create";

const styles = (theme: Theme) =>
  createStyles({
    mainContent: {
      flex: 1,
      padding: `${theme.spacing(6)}px ${theme.spacing(4.5)}px 0`,
      background: "#fff"
    }
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(({ classes }: Props) => (
  <main className={classes.mainContent}>
    <Switch>
      <Route exact path="/campaign/create" component={CreateCampaignForm} />
    </Switch>
  </main>
));
