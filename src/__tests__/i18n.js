'use strict';

import path from 'path';

const getData = name => require(path.resolve(__dirname, './../../public/i18n', `${name}.json`));

it('i18n', () => {
  expect(Object.keys(getData('en-us')))
    .toMatchObject(Object.keys(getData('zh-tw')));
});
