'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {language} from 'cat-components/lib/i18n';

import getLink from 'utils/getLink';

import * as style from './style/footer';

@language
@radium
export default class Footer extends React.Component {
  static propTypes = {
    changeLanguage: PropTypes.func.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {changeLanguage} = this.props;

    return (
      <footer style={style.root}>
        <div style={style.language}>
          {[{
            url: '/',
            name: 'English',
            changeLanguage: changeLanguage('en-us')
          }, {
            url: '/zh-tw/',
            name: '中文',
            changeLanguage: changeLanguage('zh-tw')
          }].map(({url, name, changeLanguage}, textIndex) => ([
            textIndex === 0 ? null : <div style={style.line} />,
            <div key={textIndex}
              style={style.button}
              onClick={() => {
                window.history.pushState({}, 0, getLink(url));
                changeLanguage();
              }}
            >{name}</div>
          ]))}
        </div>
      </footer>
    );
  }
}
