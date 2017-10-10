'use strict';

import * as grey from 'cat-components/lib/color/grey';

export const title = {
  margin: '0px 0px 25px',
  fontSize: '20px',
  fontWeight: 'medium'
};

export const content = isFirst => ({
  margin: isFirst ? '0px auto' : '20px auto 0px',
  fontSize: '14px',
  fontWeight: 'regular',
  lineHeight: '25px',
  color: grey._600_
});
