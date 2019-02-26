/* eslint-disable */
import React from 'react';

import i18n from 'i18next';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../utils/i18n';

import PersonListHandler from '../components/personListHandler';
import PersonOfTheDay from '../components/personOfTheDay';
import Toggle from '../components/toggle';

import producerState from '../utils/producerState';

import engProducers from '../../data/producers-eng.json';
import ruProducers from '../../data/producers-rus.json';
import byProducers from '../../data/producers-by.json';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: 'ru',
    };

    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(newLang) {
    this.setState({ lang: newLang });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

        <Toggle
          onClick={(i) => {
            if (i === 'en') {
              producerState.producers = engProducers;
            } else if (i === 'ru') {
              producerState.producers = ruProducers;
            } else if (i === 'by') {
              producerState.producers = byProducers;
            }
            window.localStorage.setItem(
              'producerState',
              JSON.stringify({
                producers: producerState.producers,
                pictures: producerState.pictures,
                lang: i,
              }),
            );
            producerState.lang = i;
            this.changeLang(i);
            i18n.changeLanguage(i);
          }}
        />

        <PersonOfTheDay />
        <PersonListHandler />
      </Layout>
    );
  }
}

export default IndexPage;
