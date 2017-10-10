'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import {language} from 'cat-components/lib/i18n';
import Img from 'cat-components/lib/img';
import Button from 'cat-components/lib/button';
import Loading from 'cat-components/lib/loading';

import getLink from 'utils/getLink';

import * as style from './style/works';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };

    this.load = this.load.bind(this);
  }

  render() {
    const {isLoading} = this.state;

    return [
      <Img {...this.props}
        key='img'
        style={style.img(isLoading)}
        onLoad={this.load}
      />, (
        !isLoading ?
          null :
          <Loading key='loading'
            style={style.loading}
          />
      )
    ];
  }

  load() {
    this.setState({isLoading: false});
  }
}

@language
@radium
export default class Works extends React.Component {
  static propTypes = {
    translate: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.loadMore = this.loadMore.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      JSON.stringify(this.props.translate) !== JSON.stringify(nextProps.translate) ||
      this.state.index !== nextState.index
    );
  }

  render() {
    const {translate} = this.props;
    const {index} = this.state;
    const {works, workButton} = translate;

    return (
      <StyleRoot style={style.root}>
        <StyleRoot style={style.container}>
          {[...works].slice(0, index * 3 + 3).map(({title, img, link}, workIndex) => (
            <div key={workIndex}>
              <div style={style.title}
              >{title}</div>

              <Show src={getLink(`/public/img/works/${img}`)}
                link={link}
                target='_blank'
                type='div'
              />
            </div>
          ))}
        </StyleRoot>

        {
          Math.floor(works.length / 3) === index ?
            null :
            <Button style={style.button}
              onClick={this.loadMore}
            >{workButton}</Button>
        }
      </StyleRoot>
    );
  }

  loadMore() {
    const {translate} = this.props;
    const {index} = this.state;
    const {works} = translate;
    const max = Math.floor(works.length / 3);

    this.setState({
      index: index + 1 > max ? /* istanbul ignore next */ max : index + 1
    });
  }
}
