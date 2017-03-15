import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FieldArray, reduxForm, submit, Form } from 'redux-form'

import { updateData } from '../actions/data_actions';
import WarningOnExit from './warning_on_exit';
import ProjectElement from './project_element';
import FieldArrayPanel from './gui/field_array_panel';

class ProjectsPanel extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (values, dispatch, props) {
      console.log(values);
        dispatch(updateData(values, this.context.cvId, 'projects', 0, true));
    }

    render() {
        return (
            <WarningOnExit route={this.props.route} dirty={this.props.dirty}>
              <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <FieldArray name="projects" component={FieldArrayPanel} type={ProjectElement} title={'Projects List'} remoteSubmit={this.props.remoteSubmit}/>
              </Form>
            </WarningOnExit>
          );
    }
}

ProjectsPanel.propTypes = {
  remoteSubmit: PropTypes.func.isRequired,
}

ProjectsPanel.contextTypes = {
  cvId: React.PropTypes.string
};

function mapStateToProps(state){
  return({
    initialValues: {
      'projects': [...state.sections.projects],
    },
  });
}

function mapDispatchToProps(dispatch) {
    return {
      remoteSubmit: () => dispatch(submit('projects'))
    };
};

ProjectsPanel = reduxForm({form: 'projects', enableReinitialize: true})(ProjectsPanel);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPanel);
