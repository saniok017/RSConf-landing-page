/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Trans } from 'react-i18next';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Producer from '../components/producer/producer';

class Person extends Component {
state = {}

componentDidMount() {
  this.setState({ person: localStorage.getItem('producerName') });
}

render() {
  return (
    <Layout>
      <SEO title="Person" />
      <Producer person={this.state.person} />
      <Link to="/"><Trans>Back</Trans></Link>
    </Layout>
  );
}
}

export default Person;
