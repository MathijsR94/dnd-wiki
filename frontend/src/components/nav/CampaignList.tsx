import React, { ReactNode } from "react";
import { Link, ListItem } from "@material-ui/core";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link as RouterLink } from "react-router-dom";
import { NavItemClasses } from "./Item";

interface Data {
  user: {
    campaigns: { id: string; name: string }[];
  };
}

export const campaignsQuery = gql`
  query userCampaignsQuery {
    user {
      campaigns {
        id
        name
      }
    }
  }
`;

interface Props extends NavItemClasses {}

export default ({ classes }: Props) => (
  <Query<Data, {}> query={campaignsQuery}>
    {({ data }): ReactNode =>
      data && data.user && data.user.campaigns
        ? data.user.campaigns.map(campaign => (
            <Link component={RouterLink} to={``} className={classes.link}>
              <ListItem button dense className={classes.item}>
                {campaign.name}
              </ListItem>
            </Link>
          ))
        : null
    }
  </Query>
);
