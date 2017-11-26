import React from 'react';
import ReactDOM from 'react-dom';
import Popover from 'material-ui/Popover'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';

const style = {
  display: 'flex',
  margin: '16, 32, 16, 0'
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
    this.handleLogout = this.handleLogout.bind(this);
  };

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleLogout = () => {
    this.props.auth.logout();
    window.location.reload();
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Account Info"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Paper style={style}>
            <Menu>
              <MenuItem primaryText="Trip History" />
              <MenuItem><NavLink activeClassName='active_nav' to='/profile'>
                User profile
              </NavLink></MenuItem>
              <MenuItem onClick={(e) => {this.handleLogout(e)}} primaryText="Logout" />
            </Menu>
          </Paper>
        </Popover>
      </div>
      )
  }
}

export default Header;