'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import fetch from 'fetch-everywhere';
import {language} from 'cat-components/lib/i18n';

import {
  title as titleStyle,
  content as contentStyle
} from 'componentsShare/style/style';

import * as style from './style/github';

@language
@radium
export default class Gtihub extends React.Component {
  static propTypes = {
    translate: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      link: null
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/HsuTing/repos?sort=pushed')
      .then(res => res.json())
      .then(data => {
        const {name, description, html_url: link} = data[0];

        this.setState({name, description, link});
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      JSON.stringify(this.props.translate) !== JSON.stringify(nextProps.translate) ||
      this.state.name !== nextState.name
    );
  }

  render() {
    const {translate} = this.props;
    const {name, description, link} = this.state;
    const {github} = translate;

    return (
      <StyleRoot style={style.root}>
        <StyleRoot style={style.container}>
          <div style={titleStyle}
          >{github}</div>

          <div style={contentStyle}>
            {description}

            {
              !name ?
                null :
                <a style={style.projectName}
                  href={link}
                  target='_blank'
                >{name}. </a>
            }
          </div>
        </StyleRoot>
      </StyleRoot>
    );
  }
}
