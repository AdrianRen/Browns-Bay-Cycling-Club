import React from 'react';
import {Button, Menu} from "semantic-ui-react";

const Item = Menu.Item;

function SignedOutMenu({signIn, register}) {
  return (
    <Item position="right">
      <Button basic inverted content="Login" onClick={signIn}/>
      <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} onClick={register}/>
    </Item>
  );
}

SignedOutMenu.propTypes = {};
SignedOutMenu.defaultProps = {};

export default SignedOutMenu;
