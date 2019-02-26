import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Map extends Component {
  constructor({ mapCoordinates }) {
    super(mapCoordinates);

    this.state = {
      coordinates: mapCoordinates,
    };
  }

  render() {
    const { coordinates } = this.state;

    return (
      <div
        style={{
          width: '100%',
          position: 'relative',
        }}
      >
        <iframe
          title="001"
          src={coordinates}
          style={{
            width: '100%',
            minWidth: '300px',
            height: '450px',
            padding: '10px',
            frameborder: '0',
            border: '0',
          }}
          allowFullScreen
        />
      </div>
    );
  }
}

Map.defaultProps = {
  mapCoordinates: '',
};

Map.propTypes = {
  mapCoordinates: PropTypes.string,
};
