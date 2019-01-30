/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Trans } from 'react-i18next';

import producerState from '../utils/producerState';
import defineProducer from '../utils/defineProducers';
import Person from './person';
import Search from './search';
import Toggle from './menu/toggle';

export default class PersonListHandler extends Component {
  constructor(props) {
    super(props);

    this.inputTextHandler = this.inputTextHandler.bind(this);

    this.state = {
      resultSearch: '',
      producers: producerState.producers,
      pictures: producerState.pictures,
    };

    if (typeof window !== 'undefined') {
      this.state.producers = defineProducer(localStorage.getItem('language'));
    }
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
          this.state.producers = defineProducer(i);
          this.forceUpdate();
          localStorage.setItem('language', `${i}`);
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
              linkImage={this.state.pictures[persons.indexOf(person.person)][0]}
              buttonName={<Trans>More</Trans>}
              size="15"
            />
          </div>
        ))}
      </CardGroup>
    );
  }
}
