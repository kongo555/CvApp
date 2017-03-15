import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { insertData } from '../actions/data_actions';

class AddCv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault()
      var self = this;
      if (this.validForm()) {
          this.props.addCv(self.state);
          self.setState({name: ''});
      } else {
          alert('Please fill all fields.');
      }
    }

    validForm() {
        if (this.state.name) {
            return true;
        } else {
            return false;
        }
    }

    handleChange(e) {
        var input_name = e.target.name;
        var value = e.target.value;
        this.setState({[input_name]: value});
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Name" ref="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
}

AddCv.propTypes = {
    name: PropTypes.string
};

function mapStateToProps(state) {
  return {};
};

function mapDispatchToProps(dispatch) {
    return {
        addCv: (value) => dispatch(insertData(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCv);
