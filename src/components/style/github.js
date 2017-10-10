'use strict';

import black from 'cat-components/lib/color/black';
import white from 'cat-components/lib/color/white';
import * as layoutStyle from 'cat-components/lib/layout';

export const root = {
  color: white,
  background: black,
  padding: '50px 100px',
  ...layoutStyle.tablet({
    padding: '50px 60px'
  }),
  ...layoutStyle.phone({
    padding: '50px 20px'
  })
};

export const container = {
  margin: 'auto',
  padding: '50px',
  width: 'calc(100% - 50px * 2)',
  maxWidth: '600px',
  textAlign: 'center',
  border: `0.5px solid ${white}`,
  ...layoutStyle.phone({
    border: '0px'
  })
};

export const projectName = {
  display: 'block',
  margin: '20px auto 0px',
  padding: '10px 5px',
  width: '100%',
  maxWidth: '250px',
  fontSize: '14px',
  fontWeight: 'medium',
  border: `0.5px solid ${white}`
};
