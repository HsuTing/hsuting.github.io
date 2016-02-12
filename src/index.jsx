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

let page_animation = (now_bottom, page_id, animation_length) => {
  let page_position = document.querySelector('#' + page_id + '-page').offsetTop;
  if(now_bottom > page_position) {
    let percent = (page_position + animation_length - now_bottom) / animation_length;
    if(percent < 0) {
      percent = 0;
    }
    else if(percent > 1) {
      percent = 1;
    }
    document.querySelector('#' + page_id + '-page').style.left = (percent * 100) + "%";
  }
};

(() => {
  ReactDOM.render(<AboutMe data={AboutMeData} />, document.getElementById('about-me'));
  ReactDOM.render(<Skill data={SkillData} />, document.getElementById('skill'));
  ReactDOM.render(<Work data={WorkData} />, document.getElementById('work'));
  ReactDOM.render(<RecentDevelopments data={RecentDevelopmentsData} />, document.getElementById('recent-developments'));
  ReactDOM.render(<Contact data={ContactData} />, document.getElementById('contact'));

  let past_position = 0;
  document.querySelector('main').addEventListener("scroll", (event) => {
    let now_position = event.target.scrollTop;
    let main_height = document.querySelector('main').offsetHeight;
    let now_bottom = now_position * 1 + main_height * 1;
    let animation_length = main_height / 2;

    page_animation(now_bottom, "about-me", animation_length);
    page_animation(now_bottom, "skill", animation_length);
    page_animation(now_bottom, "work", animation_length);
    page_animation(now_bottom, "recent-developments", animation_length);

    if(now_position == 0) {
      document.querySelector('#about-me-page').style.left = "100%";
    }
  });
})();
