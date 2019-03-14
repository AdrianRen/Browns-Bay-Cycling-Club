import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withFirebase} from "react-redux-firebase";
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from "../../modals/ModalActions";

const Item = Menu.Item;

const actions = {
  openModal
};

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/');
  };

  render() {
    const {auth, profile} = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
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
            <SignedInMenu signOut={this.handleSignOut} profile={profile}/>
            ) : (
              <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/>
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));