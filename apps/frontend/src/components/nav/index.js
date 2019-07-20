var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Drawer, List, ListItem, Link, ListItemText, createStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
const items = [
    {
        label: 'campaign.label',
        children: [
            { label: 'campaign.create', icon: 'add', route: '/campaign/create' }
        ]
    }
];
const styles = (theme) => createStyles({
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
    }
});
export default withStyles(styles)((_a) => {
    var { classes } = _a, other = __rest(_a, ["classes"]);
    const { t } = useTranslation();
    return (<Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem className={classNames(classes.campaign, classes.item, classes.itemCategory)}>
            Campaign select
          </ListItem>
          {items.map(({ label, children }) => (<Fragment key={label}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText classes={{
        primary: classes.categoryHeaderPrimary
    }}>
                  {t(label)}
                </ListItemText>
              </ListItem>
              {children.map(({ label: childLabel, route }) => (<ListItem button dense key={childLabel} className={classes.item}>
                  <Link component={RouterLink} to={route}>
                    {t(childLabel)}
                  </Link>
                </ListItem>))}
            </Fragment>))}
        </List>
      </Drawer>);
});
//# sourceMappingURL=index.js.map