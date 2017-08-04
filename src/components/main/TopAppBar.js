import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';



const styleSheet = createStyleSheet({
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

class TopAppBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }
  redirectToLogin(){
    console.log('clicked ')
    this.props.history.push('/')
  }
  render(){
    return ( <div className={this.props.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={this.props.classes.flex}>
            Title
          </Typography>
          <Button color="contrast" onClick={this.redirectToLogin}>
            login
          </Button>
        </Toolbar>
      </AppBar>
    </div>)
  }
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(TopAppBar);