'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import moment from 'moment';
import Img from 'cat-components/lib/img';
import Button from 'cat-components/lib/button';
import Link from 'cat-components/lib/link';
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
          case 'websites':
            return (
              <div style={style.imgs}>
                {content.map(({link, img}, index) => (
                  <StyleRoot key={index}
                    style={[style.img, style.animation]}
                  >
                    <Link to={link}>
                      <Img style={[style.img, style.noMargin]}
                        src={img}
                        target='_blank'
                        type='div'
                      />
                    </Link>
                  </StyleRoot>
                ))}
              </div>
            );

          default:
            return (
              <StyleRoot style={style.animation}>
                <span dangerouslySetInnerHTML={{__html: content.join('<br/>')}} />
              </StyleRoot>
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
    this.state = {
      skip: false
    };

    this.start = true;
    this.skip = this.skip.bind(this);
  }

  componentDidUpdate() {
    const {timer, timerStop} = this.props;
    const {skip} = this.state;
    const isEnd = moment(timer).format('x') >= moment(endTime).format('x');

    if(isEnd || skip)
      timerStop();
  }

  render() {
    const {isRunning, timer, timerStart} = this.props;

    return (
      <div>
        <Img style={style.background}
          src={getLink('/public/img/intro/background.jpg')}
          type='div'
          onLoad={() => {
            this.start = false;
            timerStart();
          }}
        />

        <div style={style.mask} />

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

        {
          !isRunning ?
            null :
            <Button style={style.skip}
              onClick={this.skip}
            >skip</Button>
        }
      </div>
    );
  }

  skip() {
    this.setState({skip: true});
  }
}
