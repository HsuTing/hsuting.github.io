'use strict';

import radium from 'radium';
import white from 'cat-components/lib/color/white';
import black from 'cat-components/lib/color/black';
import * as layoutStyle from 'cat-components/lib/layout';

import getLink from 'utils/getLink';

export const root = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  display: 'grid',
  gridTemplateRows: 'auto 60px auto',
  padding: '0px 20px',
  width: 'calc(100vw - 20px * 2)',
  height: '100vh',
  fontSize: '50px',
  textAlign: 'center',
  textShadow: `${black} 0px 0px 5px`,
  lineHeight: '60px',
  color: white,
  userSelect: 'none',
  ...layoutStyle.tablet({
    gridTemplateRows: 'auto 50px auto',
    fontSize: '40px',
    lineHeight: '50px'
  }),
  ...layoutStyle.phone({
    gridTemplateRows: 'auto 40px auto',
    fontSize: '30px',
    lineHeight: '40px'
  })
};

export const mask = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100vw',
  height: '100vh',
  background: white,
  opacity: '0.15',
  zIndex: '0'
};

export const background = {
  position: 'fixed',
  top: '-1px',
  left: '-1px',
  width: 'calc(100vw + 1px * 2)',
  height: 'calc(100vh + 1px * 2)',
  background: `url(${getLink('/public/img/intro/background.jpg')}) center / cover`,
  filter: 'grayscale(100%) blur(1px)',
  zIndex: '-1'
};

export const text = {
  animation: 'x 1s ease-in-out',
  animationName: radium.keyframes({
    '0%': {
      opacity: 0,
      transform: 'translate(0, 20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0, 0)'
    }
  })
};
