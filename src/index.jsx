'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import AboutMeData from './about_me_component/about_me_data';
import AboutMe from './about_me';

import SkillData from './skill_component/skill_data';
import Skill from './skill';

import WorkData from './work_component/work_data';
import Work from './work';

import ContactData from './contact_component/contact_data';
import Contact from './contact';

(() => {
  ReactDOM.render(<AboutMe data={AboutMeData} />, document.getElementById('about-me'));
  ReactDOM.render(<Skill data={SkillData} />, document.getElementById('skill'));
  ReactDOM.render(<Work data={WorkData} />, document.getElementById('work'));
  ReactDOM.render(<Contact data={ContactData} />, document.getElementById('contact'));
})();
