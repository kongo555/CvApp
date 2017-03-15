import React, { PropTypes } from 'react'
import {Field} from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton'
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import {grey50} from 'material-ui/styles/colors';


class TemplateElement extends React.Component {
    render() {
        var path = require(`../../assets/images/${this.props.element.id}.png`);

        var divClassName = "";
        var content;
        if(this.props.formValue == 'tempalte' + this.props.element.id){
          divClassName = "hovered";
          content = (
            <div className="icon">
              <ActionCheckCircle color={grey50} style={{width: '96px', height: '96px', padding: '24px'}}/>
            </div>
        );
        }
        else{
          content = (<p>click anywhere to choose</p>);
        }

        return (
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="hovereffect">
              <div className={divClassName}>
                <img className="img-responsive" src={path} alt="" />
                <label htmlFor={'tempalte' + this.props.element.id}>
                <div className="overlay">
                    <Field id ={'tempalte' + this.props.element.id} name="template_id" component="input" type="radio" value={'tempalte' + this.props.element.id}/>
                    <h2>{this.props.element.name + " "}</h2>
                    {content}
                    <div className="buttons">
                      <a className="info" href={this.props.element.view} target="_blank">Show</a>
                      <a className="info" href={this.props.element.author} target="_blank">Author</a>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        );
    }
}
// <div className="imageContainer">
//     <img src={path} />
//     <p className="title">{this.props.element.name}</p>
//     <div className="imageOverlay"></div>
//     <div className="button"><a href="#"> BUTTON </a></div>
// </div>

export default TemplateElement;
