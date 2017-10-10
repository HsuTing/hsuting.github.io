'use strict';

import black from 'cat-components/lib/color/black';
import white from 'cat-components/lib/color/white';

export const root = {
  padding: '20px 0px',
  width: '100%',
  background: black,
  color: white,
  textAlign: 'center'
};

export const icon = {
  margin: '0px 5px 20px',
  width: '35px',
  height: '35px'
};

export const language = {
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: 'medium'
};

export const line = {
  display: 'inline-block',
  height: '15px',
  border: `0.5px solid ${white}`,
  verticalAlign: 'middle'
};

export const button = {
  display: 'inline-block',
  padding: '0px 10px',
  cursor: 'pointer'
};
