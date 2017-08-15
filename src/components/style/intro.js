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
  gridTemplateRows: isRunning ? 'auto 60px auto' : '100px auto 100px',
  padding: '0px 150px',
  width: 'calc(100vw - 150px * 2)',
  height: '100vh',
  fontSize: '50px',
  textAlign: 'center',
  textShadow: `${black} 0px 0px 5px`,
  lineHeight: '60px',
  color: white,
  userSelect: 'none',
  ...layoutStyle.tablet({
    gridTemplateRows: isRunning ? 'auto 50px auto' : '60px auto 60px',
    padding: '0px 95px',
    width: 'calc(100vw - 95px * 2)',
    fontSize: '40px',
    lineHeight: '50px'
  }),
  ...layoutStyle.phone({
    gridTemplateRows: isRunning ? 'auto 40px auto' : '20px auto 20px',
    padding: '0px 20px',
    width: 'calc(100vw - 20px * 2)',
    fontSize: '30px',
    lineHeight: '40px'
  })
});

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

const countTemplate = (num, gap) => (
  [].constructor.apply(this, new Array(num))
    .map(() => `calc((100% - ${gap}px * ${num - 1}) / ${num})`)
    .join(' ')
);
export const imgs = {
  display: 'grid',
  gridTemplateColumns: countTemplate(4, 30),
  gridGap: '30px',
  gridTemplateRows: countTemplate(2, 30),
  width: '100%',
  height: '100%',
  ...layoutStyle.tablet({
    gridTemplateColumns: countTemplate(3, 20),
    gridGap: '20px',
    gridTemplateRows: countTemplate(3, 20)
  }),
  ...layoutStyle.phone({
    gridTemplateColumns: countTemplate(2, 10),
    gridGap: '10px',
    gridTemplateRows: countTemplate(4, 10)
  })
};

export const img = {
  width: '100%',
  height: '100%',
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
