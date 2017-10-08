'use strict';

import React from 'react';
import {mount} from 'enzyme';

import Index from 'components/Index';

it('Index', () => {
  const wrapper = mount(
    <Index />
  );

  expect(wrapper.containsAnyMatchingElements([
    <div>This is Index!</div> // eslint-disable-line react/jsx-key
  ])).toBe(true);
});
