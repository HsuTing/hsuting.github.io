'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import moment from 'moment';
import VideoSubtitle from 'cat-components/lib/video-subtitle';
import timer from 'cat-components/lib/timer';

import introText from 'constants/intro';

import * as style from './style/intro';

const subtitle = introText.map(({content, ...time}) => ({
  ...time,
  content: now => ( // eslint-disable-line react/display-name
    !now ?
      <div /> :
      <StyleRoot style={style.text}
      >{content}</StyleRoot>
  )
}));
const endTime = introText.slice(-1)[0];

@timer()
@radium
export default class Intro extends React.Component {
  static propTypes = {
    isRunning: PropTypes.bool.isRequired,
    timer: PropTypes.object.isRequired,
    timerStart: PropTypes.func.isRequired,
    timerStop: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {timerStart} = this.props;

    timerStart();
  }

  componentDidUpdate() {
    const {timer, timerStop} = this.props;

    this.isEnd = moment(timer).format('x') >= moment(endTime).format('x');

    if(this.isEnd)
      timerStop();
  }

  render() {
    const {isRunning, timer} = this.props;

    return (
      <div>
        <StyleRoot style={style.root}>
          <div />

          <VideoSubtitle now={isRunning ? timer : endTime}
            subtitle={subtitle}
          />

          <div />
        </StyleRoot>

        <div style={style.mask} />
        <div style={style.background} />
      </div>
    );
  }
}
