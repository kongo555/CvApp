import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">{this.props.title}{this.props.titleButton}{this.props.titleButton2}</h1>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Page;
