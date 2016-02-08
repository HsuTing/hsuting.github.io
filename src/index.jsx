'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import SkillData from './skill_component/skill_data';
import Skill from './skill';

(() => {
  ReactDOM.render(<Skill data={SkillData} />, document.getElementById('skill'));
})();
