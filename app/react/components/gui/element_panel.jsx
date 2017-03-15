import React from 'react'

class ElementPanel extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.title}
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default ElementPanel
