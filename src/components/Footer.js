'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import GithubIcon from 'react-icons/lib/fa/github-square';
import LinkedinIcon from 'react-icons/lib/fa/linkedin-square';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import EmailIcon from 'react-icons/lib/fa/envelope-square';
import PhoneIcon from 'react-icons/lib/fa/phone-square';
import {language} from 'cat-components/lib/i18n';

import getLink from 'utils/getLink';

import * as style from './style/footer';

@language
@radium
export default class Footer extends React.Component {
  static propTypes = {
    changeLanguage: PropTypes.func.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {changeLanguage} = this.props;

    return (
      <footer style={style.root}>
        <div>
          {[{
            link: 'https://github.com/HsuTing',
            Icon: GithubIcon
          }, {
            link: 'https://www.linkedin.com/in/ting-hsu-b3a640b1/',
            Icon: LinkedinIcon
          }, {
            link: 'https://www.facebook.com/hsuting0106',
            Icon: FacebookIcon
          }, {
            link: 'mailto:hsuting0106@gmail.com',
            Icon: EmailIcon
          }, {
            link: 'tel:+886937931289',
            Icon: PhoneIcon
          }].map(({link, Icon}, iconIndex) => (
            <a key={iconIndex}
              href={link}
            >
              <Icon style={style.icon} />
            </a>
          ))}
        </div>

        <div style={style.language}>
          {[{
            url: '/',
            name: 'English',
            changeLanguage: changeLanguage('en-us')
          }, {
            url: '/zh-tw/',
            name: '中文',
            changeLanguage: changeLanguage('zh-tw')
          }].map(({url, name, changeLanguage}, textIndex) => ([
            textIndex === 0 ? null : <div style={style.line} />,
            <div key={textIndex}
              style={style.button}
              onClick={() => {
                /* istanbul ignore if */
                if(process.env.NODE_ENV !== 'test')
                  window.history.pushState({}, 0, getLink(url));

                changeLanguage();
              }}
            >{name}</div>
          ]))}
        </div>
      </footer>
    );
  }
}
