'use strict';

import React from 'react';
import {mount} from 'enzyme';

import Copyright from 'components/Copyright';

const wrapper = mount(
  <Copyright />
);

it('Copyright', () => {
  expect(wrapper.html()).toBeDefined();
});
