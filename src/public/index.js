'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Index from 'components/Index';
import {basename} from 'constants/constants';

const router = {
  isServer: false
};

if(process.env.NODE_ENV !== 'production')
  router.basename = basename;

(() => {
  ReactDOM.render(
    <Index router={router} />,
    document.getElementById('root')
  );
})();
