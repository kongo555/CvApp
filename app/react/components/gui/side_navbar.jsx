import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux'

class SideNavbar extends React.Component {
    render() {
        var view;
        //fa-gear
        var id = this.props.id;
        if (id >= 0) {
            view = (
              <li>
                <Link to={`/cv/${id}/personal_informations`}>
                    <i className="fa fa-user fa-fw"></i> Personal informations
                </Link>
                <Link to={`/cv/${id}/languages`}>
                    <i className="fa fa-globe fa-fw"></i> Languages
                </Link>
                <Link to={`/cv/${id}/skills`}>
                    <i className="fa fa-list fa-fw"></i> Skills
                </Link>
                <Link to={`/cv/${id}/educations`}>
                    <i className="fa fa-book fa-fw"></i> Educations
                </Link>
                <Link to={`/cv/${id}/experiences`}>
                    <i className="fa fa-briefcase fa-fw"></i> Experiences
                </Link>
                <Link to={`/cv/${id}/projects`}>
                    <i className="fa fa-flask fa-fw"></i> Projects
                </Link>
                <Link to={`/cv/${id}/templates`}>
                    <i className="fa fa-file-o fa-fw"></i> Templates
                </Link>
                <Link to={`/cv/${id}/generate`} target="_blank">
                    <i className="fa fa-download  fa-fw"></i> Generate
                </Link>
              </li>
            );
        } else {
            view = (
                <li>
                    <Link to="/">
                        <i className="fa fa-gear fa-fw"></i> Cvs
                    </Link>
                </li>
            );
        }
        return (
          <div className="navbar-default sidebar" role="navigation">
              <div className="sidebar-nav navbar-collapse">
                  <ul className="nav" id="side-menu">
                      {view}
                  </ul>
              </div>
          </div>
        );
    }
}

export default SideNavbar;
