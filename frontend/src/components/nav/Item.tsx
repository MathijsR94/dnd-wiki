import React, { Fragment, FunctionComponentElement } from "react";
import {
  Link,
  ListItem,
  ListItemText,
  createStyles,
  Theme
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { withStyles, WithStyles } from "@material-ui/styles";
import { ClassNameMap } from "@material-ui/styles/withStyles";
import { Link as RouterLink } from "react-router-dom";

const styles = (theme: Theme) =>
  createStyles({
    categoryHeaderPrimary: {
      color: theme.palette.common.black
    },
    item: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      color: "#004499"
    },
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    link: {
      "&:hover": {
        textDecoration: "none"
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  label: string;
  children:
    | {
        label?: string;
        icon?: string;
        route?: string;
        component?: any;
      }[]
    | null;
}

export interface NavItemClasses {
  classes: ClassNameMap<"item"> & ClassNameMap<"link">;
}
export default withStyles(styles)(
  ({ label, children, classes }: Props): FunctionComponentElement<Props> => {
    const { t } = useTranslation();

    return (
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

        {children &&
          children.map(({ label: childLabel, route, component: Component }) =>
            Component ? (
              <Component
                classes={{
                  item: classes.item,
                  link: classes.link
                }}
              />
            ) : (
              route && (
                <Link
                  component={RouterLink}
                  to={route}
                  className={classes.link}
                >
                  <ListItem
                    button
                    dense
                    key={childLabel}
                    className={classes.item}
                  >
                    {childLabel && t(childLabel)}
                  </ListItem>
                </Link>
              )
            )
          )}
      </Fragment>
    );
  }
);
