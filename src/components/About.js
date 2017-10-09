'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import {language} from 'cat-components/lib/i18n';

import {content as contentStyle} from 'componentsShare/style/style';

import * as style from './style/about';

@language
@radium
export default class About extends React.Component {
  static propTypes = {
    translate: PropTypes.object.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return (
      JSON.stringify(this.props.translate) !== JSON.stringify(nextProps.translate)
    );
  }

  render() {
    const {translate} = this.props;
    const {about} = translate;

    return (
      <StyleRoot style={style.root}>
        {about.map((text, textIndex) => (
          <div key={textIndex}
            style={[contentStyle(textIndex === 0), style.text]}
          >{text}</div>
        ))}
      </StyleRoot>
    );
  }
}
