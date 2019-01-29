/* eslint-disable */
import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

export default class Toggle extends Component {
  changeLang(lang) {
    // e.preventDefault();
    // console.log(lang);

    i18n.changeLanguage(e, lang);

    producerState.lang = lang;
    if (lang === 'ru') {
      producerState.producers = producersRus;
    } else if (lang === 'en') {
      producerState.producers = producersEng;
    } else producerState.producers = producersby;
    // console.log(producerState)
  }

  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1} onClick={() => this.props.onClick('ru')}>
            <Trans>Rus</Trans>
          </ToggleButton>
          <ToggleButton value={2} onClick={() => this.props.onClick('en')}>
            <Trans>Eng</Trans>
          </ToggleButton>
          <ToggleButton value={3} onClick={() => this.props.onClick('by')}>
            <Trans>BY</Trans>
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}
