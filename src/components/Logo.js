'use strict';

import React from 'react';
import radium from 'radium';
import DownIcon from 'react-icons/lib/md/keyboard-arrow-down';
import Img from 'cat-components/lib/img';

import getLink from 'utils/getLink';

import * as style from './style/logo';

export default radium(() => (
  <div style={style.root}>
    <Img style={style.img}
      src={getLink('/public/img/icon.svg')}
    />

    <div style={style.iconBg}>
      <DownIcon style={style.icon} />
    </div>
  </div>
));
