'use strict';

import React from 'react';
import Style from './about_me_component/style';

export default class AboutMe extends React.Component {
  render() {
    return (
      <div className="mdl-grid">
        {this.props.data.map((d, i) => {
          return (
            <div key={i}
                 id={"about-me-" + d.className}
                 className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone"
            >
              <i className="material-icons about-me-icons">{d.className}</i>
              <div className="about-me-text">
                <p className="mdl-typography--body-1">
                  {d.text}<br/><font className="mdl-color-text--grey-500">{d.date}</font>
                </p>
              </div>

              <div className="mdl-tooltip" htmlFor={"about-me-" + d.className}>{d.label}</div>
            </div>
          );
        })}
      </div>
    );
  }
};
