'use strict';

import React from 'react';
import {mount} from 'enzyme';

import Index from 'components/Index';

it('Index', () => {
  const wrapper = mount(
    <Index
      i18n={{
        lang: 'en-us',
        defaultData: require('./../../../public/i18n/en-us.json')
      }}
    />
  );

  expect(wrapper.html()).toBeDefined();
});
