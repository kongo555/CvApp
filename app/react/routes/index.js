import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/app';
import CvsPanel from '../components/cvs_panel';
import PersonalInfoPanel from '../components/personal_info_panel';
import LanguagesPanel from '../components/languages_panel';
import SkillsPanel from '../components/skills_panel';
import EducationsPanel from '../components/educations_panel';
import ExperiencesPanel from '../components/experiences_panel';
import ProjectsPanel from '../components/projects_panel';
import TemplatesPanel from '../components/templates_panel';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CvsPanel} />
    <Route path="/cv/:cvId">
      <Route path="personal_informations" component={PersonalInfoPanel}/>
      <Route path="languages" component={LanguagesPanel}/>
      <Route path="skills" component={SkillsPanel}/>
      <Route path="educations" component={EducationsPanel}/>
      <Route path="experiences" component={ExperiencesPanel}/>
      <Route path="projects" component={ProjectsPanel}/>
      <Route path="templates" component={TemplatesPanel}/>
    </Route>
  </Route>
);
