import React from 'react'
import { connect } from 'react-redux'

import PageContent from './page_content';

class FieldArrayPage extends React.Component {
    constructor(props) {
        super(props);

        this.addElement = this.addElement.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }

    addElement(e){
      e.preventDefault()
      this.props.fields.push({});
    }

    removeElement(index) {
        this.props.fields.remove(index);
    }

    render() {
        var Type = this.props.type;
        return (
            <PageContent title={this.props.title} titleButton={
                <a className="btn btn-success" onClick={this.addElement}>
                              <i className="fa fa-plus"></i>
                </a>
              }
              titleButton2={
                <a className="btn btn-primary" onClick={this.props.remoteSubmit}>
                              <i className="fa fa-save"></i>
                </a>
                }>
              <div className="row">
                  <div className="col-lg-12">
                  {this.props.fields.map((element, index) => <Type key={'element' + index} index={index} element={element} removeElement={this.removeElement}/>)}
                  </div>
              </div>
            </PageContent>
        );
    }
}

export default (FieldArrayPage);
