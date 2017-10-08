'use strict';

import * as grey from 'cat-components/lib/color/grey';
import * as layoutStyle from 'cat-components/lib/layout';

import {iconSize} from './logo';

export const root = {
  padding: `calc(${iconSize}px / 2 + 50px) 100px 50px`,
  background: grey._100_,
  ...layoutStyle.tablet({
    padding: `calc(${iconSize}px / 2 + 50px) 60px 50px`
  }),
  ...layoutStyle.phone({
    padding: `calc(${iconSize}px / 2 + 50px) 20px 50px`
  }),
  lineHeight: '30px'
};

export const text = isFirst => ({
  margin: isFirst ? '0px auto' : '20px auto 0px',
  width: '100%',
  maxWidth: '600px'
});
