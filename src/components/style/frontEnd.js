'use strict';

import * as layoutStyle from 'cat-components/lib/layout';

export const root = {
  padding: '50px 100px',
  ...layoutStyle.tablet({
    padding: '50px 60px'
  }),
  ...layoutStyle.phone({
    padding: '50px 20px'
  })
};

export const container = {
  display: 'grid',
  gridTemplateColumns: 'calc(100% / 2) calc(100% / 2)',
  margin: 'auto',
  width: '100%',
  maxWidth: '800px',
  ...layoutStyle.tablet({
    gridTemplateColumns: '100%'
  })
};

export const iconRoot = {
  display: 'grid',
  ...layoutStyle.tablet({
    padding: '30px 0px 0px'
  })
};

export const icon = {
  display: 'block',
  margin: 'auto',
  width: '200px',
  height: '200px'
};
