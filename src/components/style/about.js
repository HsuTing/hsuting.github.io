'use strict';

import * as grey from 'cat-components/lib/color/grey';
import * as layoutStyle from 'cat-components/lib/layout';

import {iconSize} from './logo';

export const root = {
  padding: `calc(${iconSize}px / 2 + 50px) 100px 50px`,
  background: grey._200_,
  ...layoutStyle.tablet({
    padding: `calc(${iconSize}px / 2 + 50px) 60px 50px`
  }),
  ...layoutStyle.phone({
    padding: `calc(${iconSize}px / 2 + 50px) 20px 50px`
  })
};

export const text = {
  width: '100%',
  maxWidth: '600px'
};
