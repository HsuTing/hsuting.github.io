'use strict';

import React from 'react';

import Style from './skill_component/style';

export default class Skill extends React.Component {
  render() {
    return (
      <div className="mdl-grid">
        {this.props.data.map((d, i) => {
          let cx = 80;
          let cy = 80;
          let r = 70;
          let deg = -1 * 360 * (d.value / 100) + 90;
          let choice = d.value > 50 ? 0 : 1;
          let x = cx + r * Math.cos(deg * Math.PI / 180);
          let y = cy - r * Math.sin(deg * Math.PI / 180);
          let path = "M "+ cx + "," + cy + " L " + cx + "," + (cy - r) + " A " + r + "," + r + " 0 " + choice + ",0 " + x + "," + y + " Z";

          return (
            <div key={i}
                 className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone center"
            >
              <div style={{height: "160px",
                           overflowY: "hidden"}}
              >
                <svg width="160px" height="160px">
                  <circle cx={cx} cy={cy} r={r - 1} fill="darkturquoise" />
                  <path d={path} fill="#EEEEEE" />
                  <circle cx={cx} cy={cy} r={r - 5} fill="#fafafa" />
                </svg>

                <div style={{position: "relative",
                             width: "100%",
                             height: "40px",
                             overflowY: "hidden",
                             top: "-90px"}}
                     className="skill__show-label"
                >
                  <div id={"skill-" + i} style={{position: "relative", cursor: "pointer"}}>
                    <p className="mdl-typography--body-1 mdl-typography--text-center"
                       onClick={this._showLabel.bind(this, i)}
                       onMouseEnter={this._showLabel.bind(this, i)}
                    >{d.label}</p>
                    <p className="mdl-typography--display-1 mdl-typography--text-center"
                       onClick={this._showValue.bind(this, i)}
                       onMouseLeave={this._showValue.bind(this, i)}
                    >{d.value}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  _showLabel(index, event) {
    let item = document.querySelector('#skill-' + index);
    if(item != null && (item.className == "skill__show-label" || item.className == "")) {
      item.className = "skill__show-value";
    }
  }

  _showValue(index, event) {
    let item = document.querySelector('#skill-' + index);
    if(item != null && (item.className == "skill__show-value" || item.className == "")) {
      item.className = "skill__show-label";
    }
  }
};
