'use strict';

import React from 'react';
import radium from 'radium';
import Wrapper from 'cat-components/lib/wrapper';

import Normalize from 'componentsShare/Normalize';
import Intro from 'components/Intro';

@radium
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIntro: true
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.showIntro !== this.state.showIntro
    );
  }

  render() {
    const {showIntro} = this.state;

    return (
      <div>
        <Normalize />

        {
          !showIntro ?
            null :
            <Intro />
        }
      </div>
    );
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, router}) => (
  <Wrapper radiumConfig={radiumConfig}
    router={router}
    modules={{
      reactRouterDom: require('react-router-dom')
    }}
  >
    <Index />
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
