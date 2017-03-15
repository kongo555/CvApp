import React from 'react'

class TablePanel extends React.Component {
    render() {
        return (
            <div>
                {this.props.top}
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            {this.props.description}
                        </thead>
                        <tbody>
                            {this.props.content}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default TablePanel
