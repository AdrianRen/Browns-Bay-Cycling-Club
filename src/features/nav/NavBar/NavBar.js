import React, {Component} from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

const Item = Menu.Item;

class NavBar extends Component {
  state = {
    authenticated: true
  };

  handleSignIn = () => {
    this.setState({
      authenticated:true
    })
  };

  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push('/');
  };

  render() {
    const {authenticated} = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Item header as={Link} to={'/'}>
            <img src="assets/logo.png" alt="logo" />
            BBCC
          </Item>
          <Item name="Events" as={NavLink} to='/events'/>
          <Item name="TestArea" as={NavLink} to='/testArea'/>
          {authenticated && <Item name="People" as={NavLink} to='/people'/>}
          {authenticated &&
            <Item>
              <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
            </Item>
          }
          {
            authenticated ? (
            <SignedInMenu signOut={this.handleSignOut}/>
            ) : (
              <SignedOutMenu signIn={this.handleSignIn}/>
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);