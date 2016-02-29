'use strict';

import React from 'react';

export default class Text extends React.Component {
  render() {
    let data = this.props.data;
    let text = "text " + this.props.text;

    return (
      <div style={this.props.style}>
        <div className={this.props.date}
             style={{width: "70px",
                     padding: "5px",
                     textAlign: "center",
                     fontSize: "12px",
                     color: "white",
                     backgroundColor: "#212121"}}
        >{data.date}</div>
        <div className={text}>
          <h6 className="mdl-typography--title mdl-typography--font-bold" style={{marginBottom: "0px"}}>{data.title}</h6>
          <p className="mdl-typography--body-1 mdl-color-text--grey-400">{data.subtitle}</p>
          <p className="mdl-typography--body-1" dangerouslySetInnerHTML={{__html: data.text}}></p>
        </div>
      </div>
    );
  }
};
