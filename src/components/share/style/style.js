'use strict';

import * as layoutStyle from 'cat-components/lib/layout';

export const content = {
  margin: '0px auto',
  padding: '0px 75px',
  width: 'calc(100% - 75px * 2)',
  maxWidth: '1200px',
  ...layoutStyle.tablet({
    padding: '0px 50px',
    width: 'calc(100% - 50px * 2)'
  }),
  ...layoutStyle.phone({
    padding: '0px 25px',
    width: 'calc(100% - 25px * 2)'
  })
};
