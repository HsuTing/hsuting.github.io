'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import moment from 'moment';
import Img from 'cat-components/lib/img';
import VideoSubtitle from 'cat-components/lib/video-subtitle';
import timer from 'cat-components/lib/timer';

import introText from 'constants/intro';
import getLink from 'utils/getLink';

import * as style from './style/intro';

const subtitle = introText.map(({content, type, ...time}) => ({
  ...time,
  content: now => ( // eslint-disable-line react/display-name
    !now ?
      <div /> :
      (() => {
        switch(type) {
          case 'types':
            return (
              <div style={style.imgs}>
                {content.map(({link, img}, index) => (
                  <Img key={index}
                    style={style.img}
                    src={img}
                    link={link}
                    type='div'
                  />
                ))}
              </div>
            );

          default:
            return (
              <StyleRoot style={style.text}
              >{content}</StyleRoot>
            );
        }
      })()
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

  constructor(props) {
    super(props);
    this.start = true;
  }

  componentDidUpdate() {
    const {timer, timerStop} = this.props;

    this.isEnd = moment(timer).format('x') >= moment(endTime).format('x');

    if(this.isEnd)
      timerStop();
  }

  render() {
    const {isRunning, timer, timerStart} = this.props;

    // TODO: contentStyle
    return (
      <div>
        <StyleRoot style={style.root(isRunning)}>
          <div />

          {
            !isRunning && this.start ?
              null :
              <VideoSubtitle now={isRunning ? timer : endTime}
                subtitle={subtitle}
              />
          }

          <div />
        </StyleRoot>

        <div style={style.mask} />
        <Img style={style.background}
          src={getLink('/public/img/intro/background.jpg')}
          type='div'
          onLoad={() => {
            this.start = false;
            timerStart();
          }}
        />
      </div>
    );
  }
}
