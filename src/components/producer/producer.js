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

class Person extends Component {
  constructor({ person }) {
    super(person);

    this.state = { person };
    this.state.currentProducer = producerState.producers.find(
      producer => producer.person === this.state.person,
    );
    this.state.currentProducerIndex = producerState.producers.findIndex(
      producer => producer.person === this.state.person,
    );

    this.state.dataFilmorgaphy = this.state.currentProducer.filmography;
    this.state.dataBiography = this.state.currentProducer.biography;
    this.state.mapCoordinates = this.state.currentProducer.markOnMap;
    this.state.photo = producerState.pictures[this.state.currentProducerIndex][0];
    this.state.allPhotos = producerState.pictures[this.state.currentProducerIndex];
    this.state.video = this.state.currentProducer.videoLinks;
  }

  // if (!localStorage.producerName) localStorage.setItem('producerName', '');
  // componentWillReceiveProps() {
  //   this.state.person = localStorage.getItem('producerName');
  // }

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
};

Person.propTypes = {
  person: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  video: PropTypes.string,
};

export default Person;
