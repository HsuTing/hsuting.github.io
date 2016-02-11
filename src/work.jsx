'use strict';

import React from 'react';
import Style from './work_component/style';

export default class Work extends React.Component {
  render() {
    return (
      <div className="mdl-grid">
        {this.props.data.map((d, i) => {
          return (
            <div key={i}
                 className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone"
            >
              <div className="mdl-card mdl-shadow--6dp"
                   style={{background: "url('" + d.img + "') center / cover",
                           width: "100%",
                           height: "200px",
                           marginBottom: "20px"}}
              >
                <div className="work-img-text">
                  <div style={{height: "calc(100% - 52px)"}}></div>
                  <div style={{height: "52px",
                               padding: "16px",
                               background: "white",
                               color: "black",
                               fontSize: "14px",
                               fontWeight: "500"}}
                  >{d.label}</div>
                </div>
              </div>
              <p className="mdl-typography--body-1 work-text"
                 dangerouslySetInnerHTML={{__html: d.text}}
              ></p>
              <br/>
              <a href={d.url}
                 className="mdl-typography--body-1 mdl-color-text--grey-500"
                 style={{textDecoration: "none"}}
              >
                <font dangerouslySetInnerHTML={{__html: "READ MORE &nbsp;&nbsp;"}}></font>
                <i className="material-icons" style={{fontSize: "10px"}}>remove</i>
                <i className="material-icons" style={{fontSize: "10px", marginLeft: "-5px"}}>arrow_forward</i>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
};