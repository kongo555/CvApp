import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { insertData } from '../actions/data_actions';

class AddButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
      e.preventDefault()
      this.props.insertData();
    }

    render() {
        return (
          <a className="btn btn-success btn-sm" onclick={handleAdd}>
                  <span className="fa fa-plus"></span>
          </a>
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
        insertData: (value) => dispatch(insertData(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCv);
