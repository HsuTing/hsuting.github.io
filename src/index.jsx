'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import GetJson from './get_json';

import AboutMeData from './about_me_component/about_me_data';
import AboutMe from './about_me';

import SkillData from './skill_component/skill_data';
import Skill from './skill';

import Work from './work';

import RecentDevelopments from './recent_developments';

import ContactData from './contact_component/contact_data';
import Contact from './contact';

(() => {
  ReactDOM.render(<AboutMe data={AboutMeData} />, document.getElementById('about-me'));
  ReactDOM.render(<Skill data={SkillData} />, document.getElementById('skill'));

  GetJson('./data/work_data.json', (data) => {  
    ReactDOM.render(<Work data={data} />, document.getElementById('work'));
  }, () => {
    alert('You can not connect to server.');
  });

  GetJson('./data/recent_developments_data.json', (data) => {  
    ReactDOM.render(<RecentDevelopments data={data} />, document.getElementById('recent-developments'));
  }, () => {
    alert('You can not connect to server.');
  });

  ReactDOM.render(<Contact data={ContactData} />, document.getElementById('contact'));

  let fps = 60;
  let time = 0.5;
  let all_link = document.querySelectorAll('nav a');
  let click_function = (e) => {
    let hash = e.target.href.split("#")[1];
    let now_position = 0;
    let end_position = document.querySelector('#' + hash).offsetTop;
    let move = (end_position - now_position) / (time * fps);
    let interval = setInterval(() => {
      now_position += move;
      if(now_position > end_position) {
        clearInterval(interval);
        document.querySelector('body').scrollTop = end_position;
      }
      else {
        document.querySelector('body').scrollTop = now_position;
      }
    }, (1000 / fps));
  };
  Array.prototype.map.call(all_link, (d) => {
    d.onclick = click_function;
  });
})();
