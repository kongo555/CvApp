import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FieldArray, reduxForm, submit, Form } from 'redux-form'

import { updateData } from '../actions/data_actions';
import WarningOnExit from './warning_on_exit';
import EducationElement from './education_element';
import FieldArrayPanel from './gui/field_array_panel';

class EducationsPanel extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (values, dispatch, props) {
      console.log(values);
        dispatch(updateData(values, this.context.cvId, 'educations', 0, true));
    }

    render() {
        return (
            <WarningOnExit route={this.props.route} dirty={this.props.dirty}>
              <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <FieldArray name="educations" component={FieldArrayPanel} type={EducationElement} title={'Education List'} remoteSubmit={this.props.remoteSubmit}/>
              </Form>
            </WarningOnExit>
            );
    }
}

EducationsPanel.propTypes = {
  remoteSubmit: PropTypes.func.isRequired,
}

EducationsPanel.contextTypes = {
  cvId: React.PropTypes.string
};

function mapStateToProps(state){
  return({
    initialValues: {
      'educations': [...state.sections.educations],
    },
  });
}

function mapDispatchToProps(dispatch) {
    return {
      remoteSubmit: () => dispatch(submit('educations'))
    };
};

EducationsPanel = reduxForm({form: 'educations', enableReinitialize: true})(EducationsPanel);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationsPanel);
