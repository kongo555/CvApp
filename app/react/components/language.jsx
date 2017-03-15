import React, {PropTypes} from 'react'
import {Field} from 'redux-form';
import CustomTextField from './gui/custom_text_field';
import ElementPanel from './gui/element_panel';

const required = value => value ? undefined : 'Required'

class Language extends React.Component {
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
                <Field name={`${this.props.element}.name`} type="text" component={CustomTextField} label="Name" validate={[ required ]}/>
            </ElementPanel>
        );
    }
}

Language.propTypes = {
    name: React.PropTypes.string
};

export default Language;
