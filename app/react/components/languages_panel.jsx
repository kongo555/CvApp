import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FieldArray, reduxForm, submit, Form } from 'redux-form'

import { updateData } from '../actions/data_actions';
import WarningOnExit from './warning_on_exit';
import Language from './language';
import FieldArrayPanel from './gui/field_array_panel';

class LanguagesPanel extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (values, dispatch, props) {
        dispatch(updateData(values, this.context.cvId, 'languages', 0, true));
    }

    render() {
        return (
            <WarningOnExit route={this.props.route} dirty={this.props.dirty}>
              <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <FieldArray name="languages" component={FieldArrayPanel} type={Language} title={'Languages List'} remoteSubmit={this.props.remoteSubmit}/>
              </Form>
            </WarningOnExit>
          );
    }
}

LanguagesPanel.propTypes = {
  // items: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   name: PropTypes.string.isRequired,
  // }).isRequired).isRequired,
  remoteSubmit: PropTypes.func.isRequired,
  // rememberData: PropTypes.func.isRequired
}

LanguagesPanel.contextTypes = {
  cvId: React.PropTypes.string
};

function mapStateToProps(state){
  return({
    initialValues: {
      'languages': [...state.sections.languages],
    },
  });
}

function mapDispatchToProps(dispatch) {
    return {
      remoteSubmit: () => dispatch(submit('languages'))
    };
};

LanguagesPanel = reduxForm({form: 'languages', enableReinitialize: true})(LanguagesPanel);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguagesPanel);
