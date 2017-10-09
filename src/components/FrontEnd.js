'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import DevicesIcon from 'react-icons/lib/md/important-devices';
import {language} from 'cat-components/lib/i18n';

import {
  title as titleStyle,
  content as contentStyle
} from 'componentsShare/style/style';

import * as style from './style/frontEnd';

@language
@radium
export default class FrontEnd extends React.Component {
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
    const {frontEnd} = translate;
    const {title, content} = frontEnd;

    return (
      <StyleRoot style={style.root}>
        <StyleRoot style={style.container}>
          <div>
            <div style={titleStyle}
            >{title}</div>

            {content.map((text, textIndex) => (
              <div key={textIndex}
                style={contentStyle(textIndex === 0)}
              >{text}</div>
            ))}
          </div>

          <div style={style.iconRoot}>
            <DevicesIcon style={style.icon} />
          </div>
        </StyleRoot>
      </StyleRoot>
    );
  }
}
