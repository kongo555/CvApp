import 'rc-dialog/assets/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog';

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleOpen() {
        this.setState({visible: true});
    }

    handleClose() {
        this.setState({visible: false});
    }

    handleDelete(e) {
        // e.preventDefault();
        this.props.handleDelete();
        this.setState({visible: false});
    }

    render() {
        let dialog;
        if (this.state.visible) {
            dialog = (
                <Dialog visible={this.state.visible} animation="slide-fade" maskAnimation="fade" onClose={this.handleClose} style={{width: 600}}
                  title={< div >{this.props.title}< /div>}
                footer={[< button type = "button" className = "btn btn-default" key = "close" onClick = {this.handleClose} > Close < /button>,
                <button type="button" className="btn btn-primary" key="save" onClick={this.handleDelete} >Delete</button >]}>
                    <h4>Are you sure?</h4>
                    <p>{this.props.text}</p>
                </Dialog>
            );
        }
        return (
          <a className="btn btn-danger btn-sm" onClick={this.handleOpen}>
                        <i className="fa fa-minus"></i>
                {dialog}
            </a>
        );
    }
}

export default DeleteModal;
