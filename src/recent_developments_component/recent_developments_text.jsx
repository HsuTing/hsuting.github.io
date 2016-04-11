'use strict';

import React from 'react';

export default class Text extends React.Component {
  componentDidMount() {
    this._setHeight();
    window.addEventListener('resize', this._setHeight.bind(this));
  }

  render() {
    let d = this.props.data;
    return (
      <div ref="recentItems" style={{width: "100%"}}>   
        <div>
          <div style={{width: "70px",
                       padding: "5px",
                       margin: "0px 10px 10px 10px"}}
               className="mdl-color--grey-900 mdl-color-text--white mdl-typography--text-center"
          >{d.date}</div>
        </div>

        <div style={{width: "10px"}}>
          <div style={{width: "10px",
                       height: "10px"}}
               className="mdl-color--grey-300"
          ></div>
          <div style={{width: "2px",
                       marginLeft: "4px"}}
               className="mdl-color--grey-300"
           ></div>
        </div>

        <div>
          <div style={{maxWidth: "250px",
                       padding: "20px",
                       margin: "0px 10px 40px 10px",
                       border: "#E0E0E0 solid 2px"}}>
            <h6 className="mdl-typography--title mdl-typography--font-bold" style={{marginBottom: "0px"}}>{d.title}</h6>
            <p className="mdl-typography--body-1 mdl-color-text--grey-400">{d.subtitle}</p>
            <p className="mdl-typography--body-1" dangerouslySetInnerHTML={{__html: d.text}}></p>
          </div>
        </div>
      </div>
    );
  }

  _setHeight() {
    this.refs.recentItems.querySelector('div:nth-child(2)').querySelector('div:nth-child(2)').style.height = 
      (this.refs.recentItems.querySelector('div:nth-child(3)').offsetHeight - 10) + "px";
  }
};
