/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';

import Biography from './biography';
import Filmography from './filmography';
import Photos from './photos';
import Video from './video/video';
import Map from './map';

import producerState from '../../utils/producerState';
import defineProducer from '../../utils/defineProducers';

class Person extends Component {
  constructor({ person, language }) {
    super(person, language);

    this.state = { person, language };

    this.state.currentProducer = defineProducer(this.state.language).find(
      producer => producer.person === this.state.person,
    );
    this.state.currentProducerIndex = defineProducer(this.state.language).findIndex(
      producer => producer.person === this.state.person,
    );
    this.state.dataFilmorgaphy = this.state.currentProducer.filmography;
    this.state.dataBiography = this.state.currentProducer.biography;
    this.state.mapCoordinates = this.state.currentProducer.markOnMap;
    this.state.photo = producerState.pictures[this.state.currentProducerIndex][0];
    this.state.allPhotos = producerState.pictures[this.state.currentProducerIndex];
    this.state.video = this.state.currentProducer.videoLinks;
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.person}</h1>

        <Figure>
          <Figure.Image width={400} height={500} alt={this.state.person} src={this.state.photo} />
        </Figure>

        <Biography biography={this.state.dataBiography} />
        <Filmography filmography={this.state.dataFilmorgaphy} />
        <Photos photoLinks={this.state.allPhotos} person={this.person} />
        <Video videoLink={this.state.video} />
        <Map mapCoordinates={this.state.mapCoordinates} />
      </Fragment>
    );
  }
}

Person.defaultProps = {
  person: 'Гинцбург Александр Ильич',
  video: 'https://www.youtube.com/embed/hFgB5E0uL_Y',
  language: 'ru',
};

Person.propTypes = {
  person: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  video: PropTypes.string,
  language: PropTypes.string,
};

export default Person;
