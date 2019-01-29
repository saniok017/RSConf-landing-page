import React from 'react';
import { Nav } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { Link } from 'gatsby';

const Navigation = () => (
  <Nav className="mr-auto" style={{ fontSize: '1.5em' }}>
    <Nav.Link>
      <Link to="/">
        <Trans>Home</Trans>
      </Link>
    </Nav.Link>

    <Nav.Link>
      <Link to="/team">
        <Trans>OurTeam</Trans>
      </Link>
    </Nav.Link>
  </Nav>
);

export default Navigation;
