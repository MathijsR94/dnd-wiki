import React, { FunctionComponentElement, ReactNode } from "react";
import { Theme } from "@material-ui/core";
import {
  Drawer,
  List,
  ListItem,
  createStyles,
  withStyles,
  WithStyles
} from "@material-ui/core";
import classNames from "classnames";
import NavItem from "./Item";
import CampaignList from "./CampaignList";

const items = [
  {
    label: "campaign.label",
    children: [
      { component: CampaignList },
      { label: "campaign.create", icon: "add", route: "/campaign/create" }
    ]
  }
];

const styles = (theme: Theme) =>
  createStyles({
    item: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      color: "#004499"
    },
    itemCategory: {
      backgroundColor: "#f6f8fb",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    campaign: {
      fontSize: 24,
      color: theme.palette.common.black
    }
  });

interface Props extends WithStyles<typeof styles> {
  PaperProps?: any;
}

export default withStyles(styles)(
  ({ classes, ...other }: Props): FunctionComponentElement<Props> => {
    return (
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem
            className={classNames(
              classes.campaign,
              classes.item,
              classes.itemCategory
            )}
          >
            Campaign select
          </ListItem>
          {items.map(({ label, children }) => (
            <NavItem label={label} children={children} />
          ))}
        </List>
      </Drawer>
    );
  }
);
