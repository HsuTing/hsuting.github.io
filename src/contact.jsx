'use strict';

import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="center" style={{flexDirection: "row"}}>
        {this.props.data.map((d, i) => {
          return (
            <a key={i} href={d.url}>
              <i className={d.className}
                 style={{color: "white",
                         margin: "0px 5px 0px 5px"}}
              ></i>
            </a>
          );
        })}
      </div>
    );
  }
};
