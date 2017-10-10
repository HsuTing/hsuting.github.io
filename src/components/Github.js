'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {language} from 'cat-components/lib/i18n';

import * as style from './style/github';

@language
@radium
export default class Gtihub extends React.Component {
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
    const {github} = translate;

    return (
      <div style={style.root}>
        {github}
      </div>
    );
  }
}
