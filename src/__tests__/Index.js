'use strict';

import React from 'react';
import {mount} from 'enzyme';
import fetch from 'fetch-everywhere';

import Index from 'components/Index';

const wrapper = mount(
  <Index
    i18n={{
      lang: 'en-us',
      defaultData: require('./../../public/i18n/en-us.json')
    }}
  />
);

describe('Index', () => {
  beforeAll(() => new Promise(resolve => {
    fetch('https://api.github.com/users/HsuTing/repos?sort=pushed')
      .then(() => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
  }));

  it('# en-us', () => {
    expect(wrapper.html()).toBeDefined();
  });

  it('# zh-tw', () => {
    wrapper.setProps({
      i18n: {
        lang: 'zh-tw',
        defaultData: require('./../../public/i18n/zh-tw.json')
      }
    });

    expect(wrapper.html()).toBeDefined();
  });

  it('# works loadmore', () => {
    const count = () => wrapper.find('Works')
      .children()
      .childAt(0)
      .children().length;

    expect(count()).toBe(3);
    wrapper.find('Works').find('Button').simulate('click');
    expect(count()).not.toBe(3);
  });

  it('# change language', () => {
    wrapper.find('footer').children().last().childAt(0).simulate('click');
  });
});
