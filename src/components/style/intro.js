'use strict';

import radium from 'radium';
import white from 'cat-components/lib/color/white';
import black from 'cat-components/lib/color/black';
import * as layoutStyle from 'cat-components/lib/layout';

export const root = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  display: 'grid',
  gridTemplateRows: 'auto 100px auto',
  padding: '0px 25px',
  width: 'calc(100vw - 25px * 2)',
  height: '100vh',
  fontSize: '40px',
  textAlign: 'center',
  textShadow: `${black} 0px 0px 5px`,
  lineHeight: '50px',
  color: white,
  userSelect: 'none',
  ...layoutStyle.tablet({
    gridTemplateRows: 'auto 80px auto',
    fontSize: '30px',
    lineHeight: '40px'
  }),
  ...layoutStyle.phone({
    gridTemplateRows: 'auto 60px auto',
    fontSize: '20px',
    lineHeight: '30px'
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
