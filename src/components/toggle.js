/* eslint-disable */
import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { Trans } from 'react-i18next';

export default class Toggle extends Component {
  render() {
    return (
      <ButtonToolbar
        style={{
          margin: '10px 0',
        }}
      >
        <ButtonGroup toggle>
          <ToggleButton type="radio" onClick={() => this.props.onClick('ru')}>
            <Trans>Rus</Trans>
          </ToggleButton>
          <ToggleButton type="radio" onClick={() => this.props.onClick('en')}>
            <Trans>Eng</Trans>
          </ToggleButton>
          <ToggleButton type="radio" onClick={() => this.props.onClick('by')}>
            <Trans>Blr</Trans>
          </ToggleButton>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}
