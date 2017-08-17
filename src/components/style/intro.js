'use strict';

import radium from 'radium';
import white from 'cat-components/lib/color/white';
import black from 'cat-components/lib/color/black';
import * as layoutStyle from 'cat-components/lib/layout';

export const root = isRunning => ({
  position: 'fixed',
  top: '0px',
  left: '0px',
  display: 'grid',
  gridTemplateRows: isRunning ? 'auto 100px auto' : 'auto 120px auto',
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
    gridTemplateRows: isRunning ? 'auto 80px auto' : 'auto 120px auto',
    fontSize: '30px',
    lineHeight: '40px'
  }),
  ...layoutStyle.phone({
    gridTemplateRows: isRunning ? 'auto 60px auto' : 'auto 380px auto',
    fontSize: '20px',
    lineHeight: '30px'
  })
});

export const mask = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100vw',
  height: '100vh',
  background: white,
  opacity: '0.15'
};

export const background = {
  position: 'fixed',
  top: '-1px',
  left: '-1px',
  width: 'calc(100vw + 1px * 2)',
  height: 'calc(100vh + 1px * 2)',
  filter: 'grayscale(100%) blur(1px)'
};

export const animation = {
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

export const skip = {
  position: 'fixed',
  bottom: '15px',
  right: '20px',
  background: 'initial',
  color: white,
  border: `1px solid ${white}`
};

export const imgs = {
  margin: 'auto',
  height: '120px',
  ...layoutStyle.phone({
    width: '120px',
    height: '380px'
  })
};

export const img = {
  display: 'inline-block',
  margin: '0px 10px',
  width: '120px',
  height: '120px',
  ...layoutStyle.phone({
    display: 'block',
    margin: '10px 0px'
  })
};

export const noMargin = {
  margin: '0px'
};
