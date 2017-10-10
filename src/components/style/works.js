'use strict';

import white from 'cat-components/lib/color/white';
import * as grey from 'cat-components/lib/color/grey';
import * as layoutStyle from 'cat-components/lib/layout';

export const root = {
  padding: '50px 100px',
  color: grey._800_,
  background: grey._200_,
  ...layoutStyle.tablet({
    padding: '50px 60px'
  }),
  ...layoutStyle.phone({
    padding: '50px 20px'
  })
};

export const container = {
  display: 'grid',
  gridTemplateColumns: 'calc((100% - 30px * 2) / 3) calc((100% - 30px * 2) / 3) calc((100% - 30px * 2) / 3)',
  gridGap: '30px',
  margin: 'auto',
  width: '100%',
  maxWidth: '800px',
  textAlign: 'center',
  ...layoutStyle.phone({
    gridTemplateColumns: '100%'
  })
};

export const title = {
  margin: '0px 0px 20px',
  fontSize: '16px'
};

export const img = isLoading => ({
  width: '100%',
  height: isLoading ? '0px' : '300px',
  filter: 'grayscale(100%)'
});

export const loading = {
  display: 'inline-block'
};

export const button = {
  display: 'block',
  margin: '40px auto 0px',
  padding: '10px 0px',
  width: '100%',
  maxWidth: '300px',
  color: white,
  background: grey._400_,
  fontSize: '14px',
  fontWeight: 'medium',
  border: '0px',
  borderRadius: '0px'
};
