import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FieldArray, reduxForm, submit, Form } from 'redux-form'

import { updateData } from '../actions/data_actions';
import WarningOnExit from './warning_on_exit';
import Skill from './skill';
import FieldArrayPanel from './gui/field_array_panel';

class SkillsPanel extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (values, dispatch, props) {
        dispatch(updateData(values, this.context.cvId, 'skills', 0, true));
    }

    render() {
        return (
            <WarningOnExit route={this.props.route} dirty={this.props.dirty}>
              <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <FieldArray name="skills" component={FieldArrayPanel} type={Skill} title={'Skills List'} remoteSubmit={this.props.remoteSubmit}/>
              </Form>
            </WarningOnExit>
          );
    }
}

SkillsPanel.propTypes = {
  remoteSubmit: PropTypes.func.isRequired,
}

SkillsPanel.contextTypes = {
  cvId: React.PropTypes.string
};

function mapStateToProps(state){
  return({
    initialValues: {
      'skills': [...state.sections.skills],
    },
  });
}

function mapDispatchToProps(dispatch) {
    return {
      remoteSubmit: () => dispatch(submit('skills'))
    };
};

SkillsPanel = reduxForm({form: 'skills', enableReinitialize: true})(SkillsPanel);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsPanel);
