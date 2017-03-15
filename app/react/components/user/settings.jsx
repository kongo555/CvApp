import React from 'react';

class Settings extends React.Component {
  constructor() {
      super();
      this.state = {
          user: ({})
      };
  }

  componentDidMount() {
      this.getDataFromApi();
  }

  getDataFromApi() {
      var self = this;
      $.ajax({
          url: '/users',
          success: function(data) {
              self.setState({user: data});
          },
          error: function(xhr, status, error) {
              alert('Cannot get data from API: ', error);
          }
      });
  }

  render() {
    return (
      <div>
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="page-header">Update your profile</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
                  <div className="panel panel-default">
                      <div className="panel-body">
                          <p>{this.state.user.name}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      );
  }
}

export default Settings;
