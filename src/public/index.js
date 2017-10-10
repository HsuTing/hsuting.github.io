'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Index from 'components/Index';
import getLink from 'utils/getLink';

const i18n = {
  lang, // eslint-disable-line no-undef
  defaultData: langData, // eslint-disable-line no-undef
  basename: getLink('/public/i18n/')
};

(() => {
  ReactDOM.render(
    <Index i18n={i18n} />,
    document.getElementById('root')
  );
})();
