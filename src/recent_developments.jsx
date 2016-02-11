'use strict';

import React from 'react';

import Style from './recent_developments_component/style';
import Text from './recent_developments_component/recent_developments_text';

export default class RecentDevelopments extends React.Component {
  render() {
    let groupHeight = 250;
    let styleLeft = { float: "right",
                      position: "relative",
                      right: "25px"};
    let styleRight = { position: "relative",
                       left: "25px"};

    return (
      <div className="center" style={{flexDirection: "row"}}>
        <div className="recent-developments"
             style={{height: this.props.data.length * groupHeight + "px"}}
        >
          {this.props.data.map((d, i) => {
            let dateLeft = "recent-developments-small-show";
            let textLeft = "recent-developments-small-hide";
            let dateRight = "recent-developments-small-hide";
            let textRight = "recent-developments-small-show";

            dateLeft += i % 2 ? " recent-developments-hide" : " recent-developments-show";
            textLeft += i % 2 ? " recent-developments-show" : " recent-developments-hide";
            dateRight += i % 2 ? " recent-developments-show" : " recent-developments-hide";
            textRight += i % 2 ? " recent-developments-hide" : " recent-developments-show";

            return (
              <div key={i}
                   style={{width: "100%",
                           height: groupHeight + "px"}}
              >
                <div className="item"
                     style={{height: groupHeight + "px"}}
                >
                  <Text date={dateLeft} text={textLeft}
                        style={styleLeft} data={d}
                  />
                </div>

                <div style={{width: "50%",
                             height: groupHeight + "px",
                             float: "left"}}
                >
                  <div style={{width: "10px",
                               height: "10px",
                               position: "relative",
                               left: "-5px",
                               float: "left",
                               backgroundColor: "#E0E0E0"}}
                  ></div>
                  <Text date={dateRight} text={textRight}
                        style={styleRight} data={d}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
