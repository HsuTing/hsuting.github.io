'use strict';

import React from 'react';
import radium from 'radium';
import Wrapper from 'cat-components/lib/wrapper';
import I18n from 'cat-components/lib/i18n';

import Normalize from 'componentsShare/Normalize';

import Logo from './Logo';
import About from './About';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Github from './Github';
import Footer from './Footer';
import * as style from './style/index';

@radium
class Index extends React.Component {
  render() {
    return (
      <div style={style.root}>
        <Logo />
        <About />
        <FrontEnd />
        <BackEnd />
        <Github />
        <Footer />
      </div>
    );
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, i18n, ...props}) => (
  <Wrapper radiumConfig={radiumConfig}>
    <div>
      <Normalize />

      <I18n {...i18n}>
        <Index {...props} />
      </I18n>
    </div>
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
