import React from 'react';

class UserForm extends React.Component {
    constructor() {
        super();
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(e) {
        e.preventDefault();
        if (this.validRecord()) {
            var cv_data = {
                name: this.recordValue("name")
            };
            $.ajax({
                method: 'PUT',
                url: '/users/' + this.user.cv.id,
                data: {
                    cv: cv_data
                },
                success: function(data) {
                    this.props.handleUpdateRecord(this.user.cv, data);
                    this.setState({edit: false});
                }.bind(this),
                error: function(xhr, status, error) {
                    alert('Cannot update requested record: ', error);
                }
            });
        } else {
            alert('Please fill all fields.');
        }
    }

    validRecord() {
        if (this.recordValue("name") && this.recordValue("email") && this.recordValue("password") && this.recordValue("password_confirmation")) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <input name="name" defaultValue={this.props.user.name} className="form-control" type="text" ref="name"/>
            <input name="email" defaultValue={this.props.user.email} className="form-control" type="email" ref="email"/>
            <input name="password" defaultValue={this.props.user.password} className="form-control" type="password" ref="password"/>
            <input name="password_confirmation" defaultValue={this.props.user.password_confirmation} className="form-control" type="password" ref="password_confirmation"/>
            <a className="btn btn-success btn-sm" onClick={this.handleUpdate}>
                <i className="fa fa-save"></i>
            </a>
        );
    }
}

Cv.propTypes = {
    name: React.PropTypes.string
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    password_confirmation: React.PropTypes.string,
};

export default Cv;
