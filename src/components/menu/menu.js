import React from 'react';
import { Navbar, Form } from 'react-bootstrap';

import Logo from './logo';
import Navigation from './navigation';
// import Toggle from './toggle';

const Menu = () => (
  <Navbar bg="rebeccapurple" variant="dark">
    <Form inline>
      <Logo />
      <Navigation />
      {/* <Toggle /> */}
    </Form>
  </Navbar>
);

export default Menu;
