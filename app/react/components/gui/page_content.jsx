import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Page from './page';

class PageContent extends React.Component {
    render() {
        var view;
        if (this.props.isFetching) {
            view = (
              <Page title={this.props.title}>
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="panel panel-default">
                              <div className="panel-body">
                                  <div className="loader" />
                              </div>
                          </div>
                      </div>
                  </div>
              </Page>
            );
        }
        else{
          var content;
          if(this.props.panel){
            content = (
              <div className="row">
                  <div className="col-lg-12">
                      <div className="panel panel-default">
                          <div className="panel-body">
                              {this.props.children}
                          </div>
                      </div>
                  </div>
              </div>
            );
          }
          else{
            content = this.props.children;
          }

          view = (
              <Page title={this.props.title} titleButton={this.props.titleButton} titleButton2={this.props.titleButton2}>
                  {content}
              </Page>
          );
        }
        return view;
    }
}

PageContent.propTypes = {
  isFetching: PropTypes.bool.isRequired,
}

function mapStateToProps(state){
  return({
    ...state.other
  });
}

export default connect(
  mapStateToProps
)(PageContent);
