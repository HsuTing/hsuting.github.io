'use strict';

import * as grey from 'cat-components/lib/color/grey';

export const title = {
  margin: '0px 0px 25px',
  fontSize: '35px',
  fontWeight: 'bold'
};

export const content = isFirst => ({
  margin: isFirst ? '0px auto' : '20px auto 0px',
  lineHeight: '30px',
  color: grey._600_
});
