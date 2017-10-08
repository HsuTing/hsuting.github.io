'use strict';

import black from 'cat-components/lib/color/black';
import white from 'cat-components/lib/color/white';

export const iconSize = 60;
export const root = {
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: `calc(100vh - ${iconSize}px / 2 - 20px)`,
  width: '100%',
  height: `calc(100vh - ${iconSize}px / 2 - 20px)`,
  background: black
};

export const img = {
  display: 'block',
  margin: 'auto',
  width: '100%',
  maxWidth: '150px',
  filter: 'invert(100%)'
};

export const iconBg = {
  position: 'relative',
  left: `calc(50% - ${iconSize}px / 2)`,
  top: `calc(-${iconSize}px / 2)`,
  width: `${iconSize}px`,
  height: `${iconSize}px`,
  background: black,
  borderRadius: '50%'
};

export const icon = {
  position: 'relative',
  top: 'calc(50% - 12px)',
  display: 'block',
  margin: 'auto',
  width: '35px',
  height: '35px',
  color: white,
  background: black
};
