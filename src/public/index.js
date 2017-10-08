'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Index from 'components/Index';

const i18n = {
  lang, // eslint-disable-line no-undef
  defaultData: langData // eslint-disable-line no-undef
};

(() => {
  ReactDOM.render(
    <Index i18n={i18n} />,
    document.getElementById('root')
  );
})();
