import React, { Fragment, FunctionComponentElement } from 'react';
import { Theme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  Icon,
  ListItemIcon,
  ListItemText,
  createStyles,
  withStyles,
  WithStyles
} from '@material-ui/core';
import classNames from 'classnames';

const items = [
  {
    label: 'campaign.label',
    children: [{ label: 'campaign.create', icon: 'add' }]
  },
  {
    label: 'Quality',
    children: [
      { label: 'Analytics', icon: '' },
      { label: 'Performance', icon: '' },
      { label: 'Test Lab', icon: '' }
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
      color: '#004499'
    },
    itemCategory: {
      backgroundColor: '#f6f8fb',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    campaign: {
      fontSize: 24,
      color: theme.palette.common.black
    },
    itemActionable: {
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)'
      }
    },
    itemActiveItem: {
      color: '#4fc3f7'
    },
    itemPrimary: {
      color: 'inherit',
      fontSize: theme.typography.fontSize,
      '&$textDense': {
        fontSize: theme.typography.fontSize
      }
    },
    textDense: {},
    divider: {
      marginTop: theme.spacing(2)
    }
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(
  ({ classes }: Props): FunctionComponentElement<Props> => {
    const { t } = useTranslation();
    return (
      <Drawer variant="permanent">
        <List disablePadding>
          <ListItem
            className={classNames(
              classes.campaign,
              classes.item,
              classes.itemCategory
            )}
          >
            Semper Solari
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
              {children.map(({ label: childLabel, icon }) => (
                <ListItem
                  button
                  dense
                  key={childLabel}
                  className={classNames(classes.item, classes.itemActionable)}
                >
                  <ListItemIcon>
                    <Icon>{icon}</Icon>
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary
                    }}
                  >
                    {t(childLabel)}
                  </ListItemText>
                </ListItem>
              ))}
            </Fragment>
          ))}
        </List>
      </Drawer>
    );
  }
);
