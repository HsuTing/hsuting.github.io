'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import AboutMeData from './about_me_component/about_me_data';
import AboutMe from './about_me';

import SkillData from './skill_component/skill_data';
import Skill from './skill';

import WorkData from './work_component/work_data';
import Work from './work';

import RecentDevelopmentsData from './recent_developments_component/recent_developments_data';
import RecentDevelopments from './recent_developments';

import ContactData from './contact_component/contact_data';
import Contact from './contact';

(() => {
  ReactDOM.render(<AboutMe data={AboutMeData} />, document.getElementById('about-me'));
  ReactDOM.render(<Skill data={SkillData} />, document.getElementById('skill'));
  ReactDOM.render(<Work data={WorkData} />, document.getElementById('work'));
  ReactDOM.render(<RecentDevelopments data={RecentDevelopmentsData} />, document.getElementById('recent-developments'));
  ReactDOM.render(<Contact data={ContactData} />, document.getElementById('contact'));
})();
