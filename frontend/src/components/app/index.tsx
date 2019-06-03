import React, { ReactNode } from "react";
import {
  CssBaseline,
  Hidden,
  createMuiTheme,
  withStyles,
  WithStyles,
  createStyles
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import "../../i18n";
import { client } from "../../apolloClient";
import Nav from "../nav";
import Main from "../main";

const theme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3"
    }
  },
  shape: {
    borderRadius: 8
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#f6f8fb"
      }
    },
    MuiListItemIcon: {
      root: {
        color: "#004499"
      }
    },
    MuiButton: {
      label: {
        textTransform: "none"
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none"
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    }
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  }
});

const drawerWidth = 256;

const styles = createStyles({
  root: {
    display: "flex",
    minHeight: "100vh"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
});

interface Props extends WithStyles<typeof styles> {}

class Paperbase extends React.Component<Props> {
  /**
   * @inheritdoc
   */
  render(): ReactNode {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Router>
            <div className={classes.root}>
              <CssBaseline />
              <nav className={classes.drawer}>
                <Hidden smUp implementation="js">
                  <Nav PaperProps={{ style: { width: drawerWidth } }} />
                </Hidden>
                <Hidden xsDown implementation="css">
                  <Nav PaperProps={{ style: { width: drawerWidth } }} />
                </Hidden>
              </nav>
              <div className={classes.appContent}>
                <Main />
              </div>
            </div>
          </Router>
        </ApolloProvider>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Paperbase);
