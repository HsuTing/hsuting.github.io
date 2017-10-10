'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import ServerIcon from 'react-icons/lib/md/storage';
import {language} from 'cat-components/lib/i18n';

import {
  title as titleStyle,
  content as contentStyle
} from 'componentsShare/style/style';

import * as style from './style/backEnd';

@language
@radium
export default class BackEnd extends React.Component {
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
    const {backEnd} = translate;
    const {title, content} = backEnd;

    return (
      <StyleRoot style={style.root}>
        <StyleRoot style={style.container}>
          <div style={style.iconRoot}>
            <ServerIcon style={style.icon} />
          </div>

          <div>
            <div style={titleStyle}
            >{title}</div>

            {content.map((text, textIndex) => (
              <div key={textIndex}
                style={contentStyle(textIndex === 0)}
              >{text}</div>
            ))}
          </div>
        </StyleRoot>
      </StyleRoot>
    );
  }
}
