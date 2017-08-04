import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet({
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className={this.props.classes.root}>
                <h1>login</h1>
                <Link to="/main">Main</Link>
            </div>
        )
    }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Login);