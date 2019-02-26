import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { Trans } from 'react-i18next';

import Layout from '../components/layout';
import Person from '../components/person';

import team from '../../data/team.json';

const Team = () => (
  <Layout>
    <h1>
      <Trans>OurTeamHeader</Trans>
    </h1>

    <CardGroup>
      {team.map(teammate => (
        <Person
          nickname={teammate.nickaname}
          person={teammate.person}
          linkImage={teammate.linkImage}
          linkGit={teammate.linkButton}
        />
      ))}
    </CardGroup>
  </Layout>
);

export default Team;
