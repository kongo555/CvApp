import React, {PropTypes} from 'react'
import {Field} from 'redux-form';
import ElementPanel from './gui/element_panel';
import CustomTextField from './gui/custom_text_field';
import CustomDatePicker from './gui/custom_date_picker';

const required = value => value ? undefined : 'Required'

class ExperienceElement extends React.Component {
    constructor(props) {
        super(props);

        this.removeElement = this.removeElement.bind(this);
    }

    removeElement(){
      this.props.removeElement(this.props.index);
    }

    render() {
        return (
            <ElementPanel title = {
                <div>Element #{this.props.index + 1}
                  <a className="btn btn-danger btn-xs" onClick={() => this.removeElement({})}>
                                <i className="fa fa-minus"></i>
                  </a>
                </div>
            }>
                <div className="col-lg-12">
                  <Field name={`${this.props.element}.organization`} component={CustomTextField} label="Organization" validate={[ required ]} />
                </div>
                <div className="col-lg-10">
                  <Field name={`${this.props.element}.location`} component={CustomTextField} label="Location" validate={[ required ]} />
                </div>
                <div className="col-lg-2">
                  <Field name={`${this.props.element}.date_from`} component={CustomDatePicker} label="From" validate={[ required ]}/>
                </div>
                <div className="col-lg-10">
                  <Field name={`${this.props.element}.job_title`} component={CustomTextField} label="Job Title" validate={[ required ]} />
                </div>
                <div className="col-lg-2">
                  <Field name={`${this.props.element}.date_to`} component={CustomDatePicker} label="To"/>
                </div>
                <div className="col-lg-12">
                  <Field name={`${this.props.element}.description`} component={CustomTextField} label="Description" multiLine={true} rows={2}/>
                </div>
            </ElementPanel>
        );
    }
}

ExperienceElement.propTypes = {

};

export default ExperienceElement;
