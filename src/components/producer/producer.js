/* eslint-disable */
import React, { Component, Fragment } from 'react'
import { Figure } from 'react-bootstrap'

import Biography from './biography'
import Filmography from './filmography'
import Photos from './photos'
import Video from './video/video'
import Map from './map'

import producerState from '../../utils/producerState'

class Person extends Component {
  constructor(props) {
    super(props)

    this.state = {
      producerState: producerState,
    }

    if (typeof window !== `undefined`) {
      this.state.producerState = JSON.parse(localStorage.getItem('producerState'))
      this.state.person = localStorage.getItem('producerName')

      this.state.currentProducer = this.state.producerState.producers.find(
        producer => producer.person === this.state.person
      )
      this.state.currentProducerIndex = this.state.producerState.producers.findIndex(
        producer => producer.person === this.state.person
      )

      this.state.dataFilmorgaphy = this.state.currentProducer.filmography
      this.state.dataBiography = this.state.currentProducer.biography
      this.state.mapCoordinates = this.state.currentProducer.markOnMap
      this.state.photo = producerState.pictures[this.state.currentProducerIndex][0]
      this.state.allPhotos = producerState.pictures[this.state.currentProducerIndex]
      this.state.video = this.state.currentProducer.videoLinks
    }
  }

  render() {
    const {
      person,
      dataFilmorgaphy,
      dataBiography,
      mapCoordinates,
      photo,
      allPhotos,
      video,
    } = this.state

    return (
      <Fragment>
        {typeof window !== `undefined` && (
          <div>
            <h1>{person}</h1>
            <Figure>
              <Figure.Image width={400} height={500} alt={person} src={photo} />
            </Figure>

            <Biography biography={dataBiography} />
            <Filmography filmography={dataFilmorgaphy} />
            <Photos photoLinks={allPhotos} person={person} />
            <Video videoLink={video} />
            <Map mapCoordinates={mapCoordinates} />
          </div>
        )}
      </Fragment>
    )
  }
}

Person.defaultProps = {
  person: 'Белоусов Олег Павлович',
  video: 'https://www.youtube.com/embed/hFgB5E0uL_Y',
}

export default Person
