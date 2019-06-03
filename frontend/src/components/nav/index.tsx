import React, { Fragment, FunctionComponentElement } from "react";
import { Theme } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import {
  Drawer,
  List,
  ListItem,
  Link,
  ListItemText,
  createStyles,
  withStyles,
  WithStyles
} from "@material-ui/core";
import classNames from "classnames";
import { Link as RouterLink } from "react-router-dom";

const items = [
  {
    label: "campaign.label",
    children: [
      { label: "campaign.create", icon: "add", route: "/campaign/create" }
    ]
  }
];

const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.black
    },
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
    const { t } = useTranslation();
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
            <Fragment key={label}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary
                  }}
                >
                  {t(label)}
                </ListItemText>
              </ListItem>
              {children.map(({ label: childLabel, route }) => (
                <ListItem
                  button
                  dense
                  key={childLabel}
                  className={classes.item}
                >
                  <Link component={RouterLink} to={route}>
                    {t(childLabel)}
                  </Link>
                </ListItem>
              ))}
            </Fragment>
          ))}
        </List>
      </Drawer>
    );
  }
);
