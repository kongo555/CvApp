import React from 'react';
import {Link} from 'react-router';
import SideNavbar from './side_navbar.jsx';

class Header extends React.Component {
    constructor(props) {
      super(props);

      this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout (e) {
      e.preventDefault();
      var history = this.props.history;
      $.ajax({
          url: '/logout',
          method: 'DELETE',
          success: function(data) {
            window.location.replace("/");
          },
          error: function(xhr, status, error) {
            alert('Cannot Logout');
          }
      });
  }

    logout(){

    }

    render() {
        return (
              <div id="wrapper" className="appNavbar">
                  <nav className="navbar navbar-default navbar-static-top bg-main-color" role="navigation" style={{ marginBottom: '0'}}>
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                          <div className="navbar-brand"><Link to="/">Cv-App</Link></div>
                      </div>

                      <ul className="nav navbar-top-links navbar-right">
                          <li>
                            <Link to="/">
                              <i className="fa fa-home fa-fw"></i>
                            </Link>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                              <li>
                                <a href="#" className="fa fa-sign-out fa-fw" onClick={this.handleLogout}> Logout</a>
                              </li>
                            </ul>
                          </li>
                      </ul>
                      <SideNavbar id={this.props.id}/>
                  </nav>
              </div>
        );
    }
}

export default Header;
