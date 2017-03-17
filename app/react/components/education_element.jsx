import React, {PropTypes} from 'react'
import {Field} from 'redux-form';
import ElementPanel from './gui/element_panel';
import CustomTextField from './gui/custom_text_field';
import CustomDatePicker from './gui/custom_date_picker';

const required = value => value ? undefined : 'Required'

class EducationElement extends React.Component {
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
                <div><span>Element #{this.props.index + 1}</span>
                  <a className="btn btn-default btn-xs" onClick={() => this.removeElement({})}>
                                <i className="fa fa-minus"></i>
                  </a>
                </div>
            }>
            <div className="col-lg-12">
              <Field name={`${this.props.element}.institution`} component={CustomTextField} label="Institution" validate={[ required ]} />
            </div>
            <div className="col-lg-10">
              <Field name={`${this.props.element}.location`} component={CustomTextField} label="Location" />
            </div>
            <div className="col-lg-2">
              <Field name={`${this.props.element}.date_from`} component={CustomDatePicker} label="From" />
            </div>
            <div className="col-lg-10">
              <Field name={`${this.props.element}.degree`} component={CustomTextField} label="Degree" />
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

EducationElement.propTypes = {

};

export default EducationElement;
