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
export default ({radiumConfig, ...props}) => (
  <Wrapper radiumConfig={radiumConfig}>
    <Index {...props} />
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
