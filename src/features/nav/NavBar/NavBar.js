import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from "../../modals/ModalActions";
import { signOut } from '../../auth/authActions';

const Item = Menu.Item;

const actions = {
  openModal,
  signOut
};

const mapState = state => ({
  auth: state.auth
});

class NavBar extends Component {
  // state = {
  //   authenticated: false
  // };

  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handleSignOut = () => {
    this.props.signOut();
    this.props.history.push('/');
  };

  render() {
    const {auth} = this.props;
    const authenticated = auth.authenticated;
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
            <SignedInMenu currentUser={auth.currentUser} signOut={this.handleSignOut}/>
            ) : (
              <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/>
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect(mapState, actions)(NavBar));