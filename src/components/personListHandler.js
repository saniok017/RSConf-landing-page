/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Trans } from 'react-i18next';

import producerState from '../utils/producerState';

import Person from './person';
import Search from './search';
import Toggle from './menu/toggle';

import producersRus from '../../data/producers-rus.json';
import producersEng from '../../data/producers-eng.json';
import producersby from '../../data/producers-by.json';

const {
  producers, producerOfTheDay, pictures, lang,
} = producerState;
export default class PersonListHandler extends Component {
  constructor(props) {
    super(props);

    this.inputTextHandler = this.inputTextHandler.bind(this);

    this.state = {
      resultSearch: '',
      producers,
      producerOfTheDay,
      pictures,
      lang,
    };
  }

  static getFiltered(producersToFilter, filter) {
    if (filter.length === 0) {
      return producersToFilter;
    }

    const forfilter = filter.toLowerCase().trim();

    const producersFiltered = producersToFilter.filter((producer) => {
      const isNameMatch = producer.forSearch[0].toLowerCase().indexOf(forfilter) !== -1;
      const isCityMatch = producer.forSearch[1].toLowerCase().indexOf(forfilter) !== -1;
      const isBirthMatch = producer.forSearch[2].toLowerCase().indexOf(forfilter) !== -1;

      if (isNameMatch || isCityMatch || isBirthMatch) {
        return true;
      }

      return false;
    });

    return producersFiltered;
  }

  handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      localStorage.setItem('producerName', `${e.currentTarget.className}`);
    }
  }

  inputTextHandler(text) {
    this.setState({
      resultSearch: text,
    });
  }

  render() {
    const { resultSearch } = this.state;

    const currentProducers = PersonListHandler.getFiltered(this.state.producers, resultSearch);
    const persons = [];

    this.state.producers.map(producer => persons.push(producer.person));

    return (
      <CardGroup>
        <Toggle onClick={(i) => {
          if (i === 'en') {
            this.state.producers = producersEng;
            this.state.lang = i;
            this.forceUpdate();
          } else if (i === 'ru') {
            this.state.producers = producersRus;
            this.state.lang = i;
            this.forceUpdate();
          } else {
            this.state.producers = producersby;
            this.state.lang = i;
            this.forceUpdate();
          }
          console.log(this.state);
        }}
        />
        <Search onChange={this.inputTextHandler} />
        {currentProducers.map(person => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            role="button"
            tabIndex={0}
            className={person.person}
            key={`${person.person}`}
            onClick={this.handleClick}
          >
            <Person
              person={person.person}
              linkImage={producerState.pictures[persons.indexOf(person.person)][0]}
              buttonName={<Trans>More</Trans>}
              size="15"
            />
          </div>
        ))}
      </CardGroup>
    );
  }
}
