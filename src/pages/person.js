/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Trans } from 'react-i18next';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Producer from '../components/producer/producer';

class Person extends Component {
state = {}

componentWillMount() {
  if (typeof window !== 'undefined') {
    this.state.person = localStorage.getItem('producerName');
    this.state.language = localStorage.getItem('language');
  }
}


render() {
  return (
    <Layout>
      <SEO title="Person" />
      <Producer person={this.state.person} language={this.state.language} />
      <Link to="/"><Trans>Back</Trans></Link>
    </Layout>
  );
}
}

export default Person;
