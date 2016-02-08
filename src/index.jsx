'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import SkillData from './skill_component/skill_data';
import Skill from './skill';

import ContactData from './contact_component/contact_data';
import Contact from './contact';

(() => {
  ReactDOM.render(<Skill data={SkillData} />, document.getElementById('skill'));
  ReactDOM.render(<Contact data={ContactData} />, document.getElementById('contact'));
})();
