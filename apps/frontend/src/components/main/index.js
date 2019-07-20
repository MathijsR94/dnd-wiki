import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { Switch } from 'react-router';
const styles = (theme) => createStyles({
    mainContent: {
        flex: 1,
        padding: `${theme.spacing(6)}px ${theme.spacing(4.5)}px 0`,
        background: '#fff'
    }
});
export default withStyles(styles)(({ classes }) => (<main className={classes.mainContent}>
    <Switch />
  </main>));
//# sourceMappingURL=index.js.map