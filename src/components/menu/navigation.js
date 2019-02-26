import React from 'react';
import { Nav } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { Link } from 'gatsby';

const Navigation = () => (
  <Nav className="mr-auto" style={{ fontSize: '1.5em' }}>
    <Link to="/" style={{ margin: '0 10px', textDecoration: 'none' }}>
      <Trans>Home</Trans>
    </Link>

    <Link to="/team" style={{ margin: '0 10px', textDecoration: 'none' }}>
      <Trans>OurTeam</Trans>
    </Link>
  </Nav>
);

export default Navigation;
