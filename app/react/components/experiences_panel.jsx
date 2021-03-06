import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FieldArray, reduxForm, submit, Form } from 'redux-form'

import { updateData } from '../actions/data_actions';
import WarningOnExit from './warning_on_exit';
import ExperienceElement from './experience_element';
import FieldArrayPanel from './gui/field_array_panel';

class ExperiencesPanel extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (values, dispatch, props) {
      console.log(values);
        dispatch(updateData(values, this.context.cvId, 'experiences', 0, true));
    }

    render() {
        return (
            <WarningOnExit route={this.props.route} dirty={this.props.dirty}>
              <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <FieldArray name="experiences" component={FieldArrayPanel} type={ExperienceElement} title={'Experiences List'} remoteSubmit={this.props.remoteSubmit}/>
              </Form>
            </WarningOnExit>
          );
    }
}

ExperiencesPanel.propTypes = {
  remoteSubmit: PropTypes.func.isRequired,
}

ExperiencesPanel.contextTypes = {
  cvId: React.PropTypes.string
};

function mapStateToProps(state){
  return({
    initialValues: {
      'experiences': [...state.sections.experiences],
    },
  });
}

function mapDispatchToProps(dispatch) {
    return {
      remoteSubmit: () => dispatch(submit('experiences'))
    };
};

ExperiencesPanel = reduxForm({form: 'experiences', enableReinitialize: true})(ExperiencesPanel);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperiencesPanel);
