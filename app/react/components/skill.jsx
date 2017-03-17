import React, {PropTypes} from 'react'
import {Field} from 'redux-form';
import CustomTextField from './gui/custom_text_field';
import ElementPanel from './gui/element_panel';

const required = value => value ? undefined : 'Required'

class Skill extends React.Component {
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
                <Field name={`${this.props.element}.name`} type="text" component={CustomTextField} label="Name" validate={[ required ]}/>
            </ElementPanel>
        );
    }
}

Skill.propTypes = {
    name: React.PropTypes.string
};

export default Skill;
