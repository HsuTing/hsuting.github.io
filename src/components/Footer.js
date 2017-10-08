'use strict';

import React from 'react';
import radium from 'radium';

import getLink from 'utils/getLink';

import * as style from './style/footer';

export default radium(() => (
  <footer style={style.root}>
    <div style={style.language}>
      {[{
        name: 'English',
        link: getLink('/')
      }, {
        name: '中文',
        link: getLink('/zh-tw/')
      }].map(({name, link}, textIndex) => ([
        textIndex === 0 ? null : <div style={style.line} />,
        <a key={textIndex}
          href={link}
        >{name}</a>
      ]))}
    </div>
  </footer>
));
