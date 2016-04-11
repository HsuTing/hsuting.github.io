'use strict';

import React from 'react';

import Style from './recent_developments_component/style';
import Text from './recent_developments_component/recent_developments_text';

export default class RecentDevelopments extends React.Component {
  render() {
    return (
      <div className="center" style={{flexDirection: "row"}}>
        <div className="recent-developments">
          {this.props.data.map((d, i) => {
            return (
              <Text key={i} data={d}/>
            );
          })}
        </div>
      </div>
    );
  }
};
