import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {Field, reduxForm, submit, Form, formValueSelector} from 'redux-form';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton'

import { updateData } from '../actions/data_actions';
import WarningOnExit from './warning_on_exit';
import PageContent from './gui/page_content';
import TemplateElement from './template_element';


class TemplatesPanel extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (values, dispatch, props) {
        var result = {template_id: values.template_id.substr(8, values.template_id.length)};
        // values.template_id = values.template_id.substr(8, values.template_id.length);
        dispatch(updateData(result, this.context.cvId));
    }

    render() {
        return (
              <WarningOnExit route={this.props.route} dirty={this.props.dirty}>
                <PageContent title={"Templates "}
                  titleButton={
                    <a className="btn btn-primary" onClick={this.props.remoteSubmit}>
                                  <i className="fa fa-save"></i>
                    </a>
                    }>
                    <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                      <div className="row">
                        {this.props.templates.map((element, index) => <TemplateElement key={'element' + index} index={index} element={element} formValue={this.props.formValue}/>)}
                      </div>
                    </Form>
                </PageContent>
              </WarningOnExit>
            );
    }
}



TemplatesPanel.propTypes = {
    remoteSubmit: PropTypes.func.isRequired,
}

TemplatesPanel.contextTypes = {
    cvId: React.PropTypes.string
};

function mapStateToProps(state) {
    var template = state.sections.cvs;
    if(template[0])
      template = 'tempalte' + template[0].template_id;
    else {
      template = 'tempalte' + template.template_id;
    }

    var selector = formValueSelector('template')
    return ({
      initialValues: {
        'template_id': template,
      },
      templates: state.sections.templates,
      formValue: selector(state, 'template_id')
    });
}

function mapDispatchToProps(dispatch) {
    return {
        remoteSubmit: () => dispatch(submit('template'))
    };
};

TemplatesPanel = reduxForm({form: 'template', enableReinitialize: true})(TemplatesPanel);

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesPanel);
