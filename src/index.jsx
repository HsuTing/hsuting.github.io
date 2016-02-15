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
})();
