import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, submit, Form } from 'redux-form';

import { updateData } from '../actions/data_actions';
import WarningOnExit from './warning_on_exit';
import PageContent from './gui/page_content';
import CustomTextField from './gui/custom_text_field';
import CustomDatePicker from './gui/custom_date_picker';

class PersonalInfo extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (values, dispatch, props) {
        dispatch(updateData(values, this.context.cvId, 'personal_informations', values.id));
    }

    render() {
        return (
              <WarningOnExit route={this.props.route} dirty={this.props.dirty}>
                <PageContent title={"Personal Information "}
                  titleButton={
                    <a className="btn btn-primary" onClick={this.props.remoteSubmit}>
                                  <i className="fa fa-save"></i>
                    </a>
                    }>
                    <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        <div className="col-lg-6">
                            <div>
                                <Field name="name" component={CustomTextField} label="Name"/>
                            </div>
                            <div>
                                <Field name="surname" component={CustomTextField} label="Surame"/>
                            </div>
                            <div>
                                <Field name="profession" component={CustomTextField} label="Profession" />
                            </div>
                            <div>
                                <Field name="email" component={CustomTextField} label="Email"/>
                            </div>
                            <div>
                                <Field name="phone" component={CustomTextField} label="Phone number" />
                            </div>
                            <div>
                                <Field name="homepage" component={CustomTextField} label="Homepage" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <Field name="birthday" component={CustomDatePicker} label="Birthday"/>
                            </div>
                            <div>
                                <Field name="street" component={CustomTextField} label="Street"/>
                            </div>
                            <div>
                                <Field name="zipCode" component={CustomTextField} label="Zip code"/>
                            </div>
                            <div>
                                <Field name="town" component={CustomTextField} label="Town"/>
                            </div>
                            <div>
                                <Field name="linkedin" component={CustomTextField} label="Linkedin" />
                            </div>
                            <div>
                                <Field name="github" component={CustomTextField} label="Github" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                          <Field name="statement" component={CustomTextField} label="Statement" multiLine={true} rows={2}/>
                        </div>
                    </Form>
                </PageContent>
              </WarningOnExit>
            );
    }
}

PersonalInfo.propTypes = {
    remoteSubmit: PropTypes.func.isRequired,
}

PersonalInfo.contextTypes = {
    cvId: React.PropTypes.string
};

function mapStateToProps(state) {
    return ({
      initialValues: {...state.sections.personal_informations},
    });
}

function mapDispatchToProps(dispatch) {
    return {
        remoteSubmit: () => dispatch(submit('personalInfo'))
    };
};

const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'surname' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

PersonalInfo = reduxForm({form: 'personalInfo', validate, enableReinitialize: true})(PersonalInfo);

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
